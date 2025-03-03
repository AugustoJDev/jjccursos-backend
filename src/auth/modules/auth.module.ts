import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret',
      signOptions: { expiresIn: '7d' },
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
