import { 
  Controller, 
  Post, 
  Body, 
  Res, 
  Req, 
  Get, 
  UseGuards, 
  Param, 
  Headers, 
  RawBodyRequest,
  HttpException,
  HttpStatus
} from '@nestjs/common';
  import { PaymentService } from '../services/payment.service';
  import { Response, Request } from 'express';
  import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
  import { ConfigService } from '@nestjs/config';
  
  @Controller('payments')
  export class PaymentController {
    constructor(
      private readonly paymentService: PaymentService,
      private readonly configService: ConfigService,
    ) {}
  
    @Post('create-checkout-session')
    async createCheckoutSession(
      @Body() body: { 
        priceId: string; 
        userId: string; 
        planType: string; 
        email: string; 
        name: string; 
        successUrl: string; 
        cancelUrl: string;
      },
      @Res() res: Response
    ) {
      try {

        const { session, error } = await this.paymentService.createCheckoutSession(
          body.priceId,
          body.userId,
          body.planType,
          body.email,
          body.name,
          body.successUrl,
          body.cancelUrl
        );
        
        if (session && session.id) {
          return res.json({ 
            id: session.id, 
            url: session.url // URL direta para o checkout
          });
        } else {
          return res.status(500).json({ 
            error: error || 'Falha na criação da sessão de pagamento' 
          });
        }
      } catch (error) {
        return res.status(500).json({ 
          error: `Erro no processamento do pagamento: ${error.message}` 
        });
      }
    }
  
    @Post('webhook')
    async handleWebhook(
      @Req() req: RawBodyRequest<Request>,
      @Headers('stripe-signature') signature: string,
      @Res() res: Response,
    ) {
      if (!signature) {
        return res.status(400).json({ error: 'Stripe signature is missing' });
      }
  
      try {
        const payload = req.rawBody;
        if (!payload) {
          return res.status(400).json({ error: 'Request body is missing' });
        }
        const result = await this.paymentService.handleWebhookEvent(signature, payload);
        return res.json(result);
      } catch (error) {
        return res.status(400).json({ 
          error: `Webhook error: ${error.message}` 
        });
      }
    }

    @Post('verify-session')
    async verifySession(@Body() verifySessionDto: { sessionId: string }) {
      try {
        if (!verifySessionDto.sessionId) {
          throw new HttpException(
            'ID da sessão não fornecido',
            HttpStatus.BAD_REQUEST,
          );
        }

        return await this.paymentService.verifySession(verifySessionDto.sessionId);
      } catch (error) {
        throw new HttpException(
          error.message || 'Erro ao verificar sessão de pagamento',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get('subscription/:subscriptionId')
    @UseGuards(JwtAuthGuard)
    async getSubscription(
      @Param('subscriptionId') subscriptionId: string,
      @Res() res: Response,
    ) {
      try {
        const subscription = await this.paymentService.getSubscription(subscriptionId);
        return res.json(subscription);
      } catch (error) {
        return res.status(400).json({ 
          error: `Failed to get subscription: ${error.message}` 
        });
      }
    }
  
    @Post('subscription/cancel')
    @UseGuards(JwtAuthGuard)
    async cancelSubscription(
      @Body() body: { userId: string; subscriptionId: string },
      @Res() res: Response,
    ) {
      try {
        const result = await this.paymentService.cancelUserSubscription(
          body.userId,
          body.subscriptionId,
        );
        return res.json(result);
      } catch (error) {
        return res.status(400).json({ 
          error: `Failed to cancel subscription: ${error.message}` 
        });
      }
    }
  }