import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
