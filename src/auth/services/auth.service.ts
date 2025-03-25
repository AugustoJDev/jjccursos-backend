import { Injectable, HttpException, HttpStatus, Body, Res } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthBlockService {
  private loginAttempts = new Map<string, { count: number, blockedUntil: number }>();
  
  constructor(private prisma: PrismaService) {}

  checkLoginAttempts(email: string): void {
    const now = Date.now();
    const attempts = this.loginAttempts.get(email);
    
    if (attempts && attempts.blockedUntil > now) {
      const remainingMinutes = Math.ceil((attempts.blockedUntil - now) / 60000);
      throw new HttpException(
        `Muitas tentativas de login. Tente novamente em ${remainingMinutes} minutos.`,
        HttpStatus.TOO_MANY_REQUESTS
      );
    }
  }

  recordFailedLogin(email: string): void {
    const now = Date.now();
    const attempts = this.loginAttempts.get(email) || { count: 0, blockedUntil: 0 };
    
    attempts.count += 1;
    
    if (attempts.count >= 5) { // 5 tentativas falhas
      attempts.blockedUntil = now + 15 * 60 * 1000; // bloqueio por 15 minutos
    }
    
    this.loginAttempts.set(email, attempts);
  }

  resetLoginAttempts(email: string): void {
    this.loginAttempts.delete(email);
  }
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(
    @Res() res: Response,
    @Body() data: {
      name: string;
      email: string;
      password: string;
      cpf: string;
      phone: string;
    }
  ) {
    try {
      // Validar CPF - deve ter exatamente 11 dígitos
      if (data.cpf.replace(/\D/g, '').length !== 11) {
        return res.status(400).json({ 
          message: 'CPF inválido. Deve conter exatamente 11 dígitos numéricos.' 
        });
      }

      // Limpar o CPF para conter apenas números
      const cleanCpf = data.cpf.replace(/\D/g, '');

      // Verificar se CPF já existe
      const existingCpf = await this.prisma.user.findUnique({
        where: { cpf: cleanCpf },
      });

      if (existingCpf) {
        return res.status(401).json({ message: 'Este CPF já está registrado.' });
      }

      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
      });

      if (existingUser) {
        return res.status(401).json({ message: 'Esse e-mail já está registrado...' });
      }

      // Validar telefone
      if (data.phone.length > 15) {
        return res.status(400).json({ 
          message: 'Número de telefone inválido. Máximo de 15 caracteres.' 
        });
      }

      const hashedPassword = await bcrypt.hash(data.password, 10);
      
      const userData = {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        cpf: cleanCpf,
        phone: data.phone,
        plan: 'FREE',
        subscriptionType: 'FREE'
      };

      const user = await this.prisma.user.create({
        data: userData
      });

      const token = this.jwtService.sign({ userId: user.id });
      
      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.json({ 
        message: 'Usuário registrado com sucesso!', 
        userId: user.id 
      });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ 
        message: 'Erro ao criar usuário. Verifique os dados e tente novamente.' 
      });
    }
  }

  async login(res: Response, email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = this.jwtService.sign({ userId: user.id });
      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.json({ message: 'Login realizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return res.status(500).json({ 
        message: 'Erro ao processar login. Tente novamente.' 
      });
    }
  }

  logout(res: Response) {
    res.clearCookie('auth_token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    });

    return res.json({ message: 'Logout realizado com sucesso!' });
  }

  async me(req: Request, res: Response) {
    try {
      const token = req.cookies['auth_token'];
      if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
      }

      const decoded = this.jwtService.verify(token);
      
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          cpf: true,
          phone: true,
          subscriptionType: true,
          subscriptionId: true,
          subscriptionStatus: true
        }
      });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      return res.status(200).json(user);
    } catch {
      return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
  }
}