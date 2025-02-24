import { Controller, Post, Get, Body, Res, Req } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Get("me")
  async me(@Req() req: Request, @Res() res: Response) {
    try {
      const user = await this.authService.validateUserFromCookie(req);
      if (!user) {
        return res.status(401).json({ message: "Não autenticado" });
      }

      return res.json({ user });
    } catch {
      return res.status(401).json({ message: "Erro na autenticação" });
    }
  }

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
