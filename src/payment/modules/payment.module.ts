import { Module } from '@nestjs/common';
import { PaymentService } from 'src/payment/services/payment.service';
import { PaymentController } from 'src/payment/controllers/payment.controller';
import { PrismaModule } from '../../prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}