import { Injectable, Body, Res } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(@Res() res: Response,
                 @Body() data: {
      name: string;
      email: string;
      password: string;
      cpf: string;
      phone: string;
    }) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return res.status(401).json({ message: 'Esse e-mail já está registrado...' });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashedPassword, plan: 'FREE' },
    });

    return { message: 'Usuário registrado com sucesso!', userId: user.id };
  }

  async login(res: Response, email: string, password: string, ) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = this.jwtService.sign({ userId: user.id });
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ message: 'Login realizado com sucesso!' });
  }

  logout(res: Response) {
    res.clearCookie('access_token');

    return res.json({ message: 'Logout realizado com sucesso!' });
  }

  async me(req: Request, res: Response) {
    const token = req.cookies['auth_token'];
    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          cpf: true,
          phone: true,
          plan: true,
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