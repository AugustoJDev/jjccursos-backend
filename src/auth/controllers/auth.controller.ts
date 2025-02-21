import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('register')
  async register(@Body() data: any) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() 
    { email, password }: { email: string; password: string },
    @Res() res: Response
  ) {
    return this.authService.login(res, email, password);
  }
}
