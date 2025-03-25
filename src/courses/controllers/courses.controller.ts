import { Controller, Get, Post, Body, Req, HttpException, HttpStatus } from '@nestjs/common';
import { CoursesService } from '../services/courses.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService: CoursesService,
    private jwtService: JwtService // Injetar o JwtService
  ) {}

  @Get('progress')
  async getProgress(@Req() req: Request) {
    try {
      const token = req.cookies['auth_token'];
      
      if (!token) {
        throw new HttpException('Token de autenticação não fornecido', HttpStatus.UNAUTHORIZED);
      }
      
      let userId;
      try {
        const decoded = this.jwtService.verify(token);
        userId = decoded.userId;
      } catch {
        throw new HttpException('Token inválido ou expirado', HttpStatus.UNAUTHORIZED);
      }
      
      if (!userId) {
        throw new HttpException('ID do usuário não encontrado no token', HttpStatus.BAD_REQUEST);
      }
      
      return await this.coursesService.getProgress(userId);
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao buscar progresso dos vídeos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('progress')
  async updateProgress(@Req() req: Request, @Body() body: { videoId: string; progress: number; completed: boolean }) {
    try {
      
      let token = req.cookies?.auth_token;
      
      if (!token && req.headers.authorization) {
        const authHeader = req.headers.authorization;
        const parts = authHeader.split(' ');
        if (parts.length === 2 && parts[0] === 'Bearer') {
          token = parts[1];
        }
      }
      
      if (!token) {
        throw new HttpException('Token de autenticação não fornecido', HttpStatus.UNAUTHORIZED);
      }
      
      let userId;

      try {
        const decoded = this.jwtService.verify(token);
        userId = decoded.userId;
      } catch {
        throw new HttpException('Token inválido ou expirado', HttpStatus.UNAUTHORIZED);
      }
      
      // Resto do código permanece igual
      const { videoId, progress, completed } = body;
      
      if (!userId) {
        throw new HttpException('ID do usuário não encontrado no token', HttpStatus.BAD_REQUEST);
      }
      
      if (!videoId) {
        throw new HttpException('ID do vídeo não fornecido', HttpStatus.BAD_REQUEST);
      }
      
      return await this.coursesService.updateProgress(userId, videoId, progress, completed);
    } catch (error) {
      console.error('Erro na rota progress:', error);
      throw new HttpException(
        error.message || 'Erro ao atualizar progresso do vídeo',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
  @Get('access')
  async checkCourseAccess(@Req() req: Request) {
    try {
      // Extrair o token do cookie
      const token = req.cookies['auth_token'];
      
      if (!token) {
        throw new HttpException('Token de autenticação não fornecido', HttpStatus.UNAUTHORIZED);
      }
      
      let userId;
      try {
        const decoded = this.jwtService.verify(token);
        userId = decoded.userId;
      } catch {
        throw new HttpException('Token inválido ou expirado', HttpStatus.UNAUTHORIZED);
      }
      
      if (!userId) {
        throw new HttpException('ID do usuário não encontrado no token', HttpStatus.BAD_REQUEST);
      }
      
      return await this.coursesService.checkUserAccess(userId);
    } catch (error) {
      throw new HttpException(
        error.message || 'Erro ao verificar acesso aos cursos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}