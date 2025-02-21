import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(data: { name: string; email: string; password: string; cpf: string; phone: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
    return { message: 'Usuário registrado com sucesso!', userId: user.id };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Credenciais inválidas');
    }

    const token = this.jwtService.sign({ userId: user.id });
    return { token };
  }
}
