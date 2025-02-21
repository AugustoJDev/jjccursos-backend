import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Permite que o serviço seja acessado em qualquer módulo sem precisar ser importado
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Expõe o PrismaService para outros módulos
})
export class PrismaModule {}