import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'prisma/generated/prisma-client';

type SafeUser = Pick<User, 'id' | 'name' | 'email' | 'cpf' | 'phone' | 'createdAt' >;

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
    phone: string;
    createdAt: string;
  }): Promise<{ message: string; userId: string }> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
      select: { id: true },
    });

    return { message: 'Usuário registrado com sucesso!', userId: user.id };
  }

  async login(res: Response, email: string, password: string): Promise<Response> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, password: true },
    });

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

  logout(res: Response): Response {
    res.clearCookie('auth_token');
    return res.json({ message: 'Logout realizado com sucesso!' });
  }

  async validateUserFromCookie(req: Request & { cookies?: { [key: string]: any } }): Promise<SafeUser | null> {
    try {
      const token = req.cookies?.auth_token;
      if (!token) return null;

      const decoded = this.jwtService.verify<{ userId: string }>(token);
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.userId }
      });

      return user as SafeUser;
    } catch (error) {
      console.error("Erro ao validar usuário:", error);
      return null;
    }
  }
}
