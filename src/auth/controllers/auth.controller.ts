import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('register')
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
    return this.authService.register(res, data);
  }

  @Post('login')
  async login(@Body() 
    { email, password }: { email: string; password: string },
    @Res() res: Response
  ) {
    return this.authService.login(res, email, password);
  }

  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }

  @Get('me')
  async me(@Req() req: Request, @Res() res: Response) {
    return this.authService.me(req, res);
  }
}
