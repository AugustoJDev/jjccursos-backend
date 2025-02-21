import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async register(data: { 
    name: string; 
    email: string; 
    password: string; 
    cpf: string; 
    phone: string 
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
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
}