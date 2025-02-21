import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Response } from 'express';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcryptjs';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  @Post('register')
  async register(@Body() data: any) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }, res: Response) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = this.jwtService.sign({ userId: user.id });

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    
    return this.authService.login(email, password);
  }
}
