// src/courses/services/courses.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CoursesService {
  private readonly logger = new Logger(CoursesService.name);

  constructor(private prisma: PrismaService) {}

  async getProgress(userId: string) {
    try {
      // Buscar todos os registros de progresso do usuário
      const progress = await this.prisma.videoProgress.findMany({
        where: { userId },
        select: {
          videoId: true,
          progress: true,
          completed: true,
          updatedAt: true
        },
        orderBy: {
          updatedAt: 'desc'
        }
      });
      
      return {
        success: true,
        data: progress
      };
    } catch (error) {
      this.logger.error(`Erro ao buscar progresso: ${error.message}`, error.stack);
      throw new Error(`Erro ao buscar progresso dos vídeos: ${error.message}`);
    }
  }

  async updateProgress(userId: string, videoId: string, progress: number, completed: boolean) {
    try {
      // Verificar se já existe um registro de progresso
      const existingProgress = await this.prisma.videoProgress.findUnique({
        where: {
          userId_videoId: {
            userId,
            videoId
          }
        }
      });
      
      let result;
      
      if (existingProgress) {
        // Atualizar registro existente
        result = await this.prisma.videoProgress.update({
          where: {
            id: existingProgress.id
          },
          data: {
            progress,
            completed,
            updatedAt: new Date()
          },
          select: {
            videoId: true,
            progress: true,
            completed: true,
            updatedAt: true
          }
        });
      } else {
        // Criar novo registro de progresso
        result = await this.prisma.videoProgress.create({
          data: {
            userId,
            videoId,
            progress,
            completed
          },
          select: {
            videoId: true,
            progress: true,
            completed: true,
            updatedAt: true
          }
        });
      }
      
      return {
        success: true,
        data: result
      };
    } catch (error) {
      this.logger.error(`Erro ao atualizar progresso: ${error.message}`, error.stack);
      throw new Error(`Erro ao atualizar progresso do vídeo: ${error.message}`);
    }
  }
  
  async checkUserAccess(userId: string) {
    try {
      // Buscar informações de assinatura do usuário
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          subscriptionStatus: true,
          subscriptionType: true,
          plan: true
        }
      });
      
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      
      // Verificar acesso com base no plano/assinatura
      const hasAccess = user.subscriptionStatus === 'active' || user.plan !== 'FREE';
      const planType = user.subscriptionType || user.plan;
      
      return {
        success: true,
        data: {
          hasAccess,
          planType,
          subscriptionStatus: user.subscriptionStatus
        }
      };
    } catch (error) {
      this.logger.error(`Erro ao verificar acesso: ${error.message}`, error.stack);
      throw new Error(`Erro ao verificar acesso aos cursos: ${error.message}`);
    }
  }
}