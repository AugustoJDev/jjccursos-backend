import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentService {
  private stripe: Stripe;
  private readonly logger = new Logger(PaymentService.name);

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const stripeSecretKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!stripeSecretKey) {
      throw new Error('Stripe secret key is not defined in environment variables');
    }
    this.stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-02-24.acacia',
    });
  }
  async createCheckoutSession(
    priceId: string,
    userId: string,
    planType: string,
    email: string,
    name: string,
    successUrl: string,
    cancelUrl: string,
  ) {
    try {
      const paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[] = [
        'card',
        'boleto',
      ];

      const paymentMethodOptions = {
        boleto: {
          expires_after_days: 3,
        },
      };

      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: paymentMethodTypes,
        payment_method_options: paymentMethodOptions,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        customer_email: email,
        billing_address_collection: 'required',
        locale: 'pt-BR',
        success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: cancelUrl,
        metadata: {
          userId,
          planType,
          name,
        },
        subscription_data: {
          metadata: {
            userId,
            planType,
          },
        },
        allow_promotion_codes: true,
      });

      await this.prisma.paymentSession.create({
        data: {
          sessionId: session.id,
          userId,
          priceId,
          planType,
          status: 'pending',
          createdAt: new Date(),
        },
      });

      return { session, error: null };
    } catch (error) {
      this.logger.error(`Failed to create checkout session: ${error.message}`, error.stack);
      return { session: null, error: `Failed to create checkout session: ${error.message}` };
    }
  }

  async verifySession(sessionId: string) {
    try {
      const session = await this.stripe.checkout.sessions.retrieve(sessionId);
      
      const paymentStatus = session.payment_status;
      const subscriptionId = session.subscription as string;

      if (subscriptionId && paymentStatus === 'paid') {
        const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
        
        if (session.metadata?.userId) {
          await this.prisma.user.update({
            where: { id: session.metadata.userId },
            data: {
              subscriptionId: subscriptionId,
              subscriptionStatus: subscription.status,
              subscriptionType: session.metadata.planType || 'default',
            },
          });
        }
        
        return {
          success: true,
          paymentStatus,
          subscriptionStatus: subscription.status,
          subscriptionId,
          planType: session.metadata?.planType,
        };
      }
      
      // Caso o pagamento ainda esteja pendente
      return {
        success: false,
        paymentStatus,
        message: paymentStatus === 'unpaid' ? 'Pagamento pendente' : 'Status de pagamento desconhecido',
      };
      
    } catch (error) {
      this.logger.error(`Error verifying session: ${error.message}`, error.stack);
      throw new Error(`Erro ao verificar sessão: ${error.message}`);
    }
  }

  /**
   * Webhooks para processar eventos do Stripe (importante para atualizar o status das assinaturas)
   */
  async handleWebhookEvent(signature: string, payload: Buffer) {
    try {
      const webhookSecret = this.configService.get<string>('STRIPE_WEBHOOK_SECRET');
      if (!webhookSecret) {
        throw new Error('Stripe webhook secret is not defined');
      }
  
      const event = this.stripe.webhooks.constructEvent(
        payload,
        signature,
        webhookSecret,
      );
  
      switch (event.type) {
        case 'checkout.session.completed': {
          // O objeto já é do tipo correto, não precisa de asserção
          const session = event.data.object;
          await this.handleSuccessfulCheckout(session);
          break;
        }
        case 'invoice.paid': {
          // O objeto já é do tipo correto, não precisa de asserção
          const invoice = event.data.object;
          await this.handleSuccessfulInvoicePayment(invoice);
          break;
        }
        case 'customer.subscription.created':
        case 'customer.subscription.updated': {
          const subscription = event.data.object;
          await this.updateSubscriptionStatus(subscription);
          break;
        }
        case 'customer.subscription.deleted': {
          // O objeto já é do tipo correto, não precisa de asserção
          const subscription = event.data.object;
          await this.cancelSubscription(subscription);
          break;
        }
      }
  
      return { received: true };
    } catch (error) {
      this.logger.error(`Webhook error: ${error.message}`, error.stack);
      throw error;
    }
  }

  /**
   * Processa checkout bem-sucedido
   */
  private async handleSuccessfulCheckout(session: Stripe.Checkout.Session) {
    if (session.metadata?.userId && session.subscription) {
      const userId = session.metadata.userId;
      const planType = session.metadata.planType;
  
      await this.prisma.paymentSession.updateMany({
        where: { sessionId: session.id },
        data: { status: 'completed' },
      });
  
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          plan: planType,
          subscriptionStatus: 'active',
          subscriptionType: planType,
          subscriptionId: typeof session.subscription === 'string' 
            ? session.subscription 
            : session.subscription?.id,
        },
      });
    }
  }

  private async handleSuccessfulInvoicePayment(invoice: Stripe.Invoice) {
    if (invoice.subscription && invoice.status === 'paid') {
      let subscriptionId: string;
      if (typeof invoice.subscription === 'string') {
        subscriptionId = invoice.subscription;
      } else {
        subscriptionId = invoice.subscription.id;
      }
      const subscription = await this.stripe.subscriptions.retrieve(
        subscriptionId,
      );
  
      if (subscription.metadata?.userId) {
        await this.prisma.user.update({
          where: { id: subscription.metadata.userId },
          data: {
            subscriptionStatus: 'active',
          },
        });
      }
    }
  }

  /**
   * Atualiza o status da assinatura no banco de dados
   */
  private async updateSubscriptionStatus(subscription: Stripe.Subscription) {
    if (subscription.metadata?.userId) {
      const userId = subscription.metadata.userId;
      let status: string;
  
      switch (subscription.status) {
        case 'active':
          status = 'active';
          break;
        case 'past_due':
          status = 'past_due';
          break;
        case 'unpaid':
          status = 'unpaid';
          break;
        case 'canceled':
          status = 'canceled';
          break;
        default:
          status = subscription.status;
      }
  
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          subscriptionStatus: status,
          subscriptionId: subscription.id,
        },
      });
    }
  }

  /**
   * Cancela a assinatura no banco de dados
   */
  private async cancelSubscription(subscription: Stripe.Subscription) {
    if (subscription.metadata?.userId) {
      await this.prisma.user.update({
        where: { id: subscription.metadata.userId },
        data: {
          subscriptionStatus: 'canceled',
        },
      });
    }
  }

  /**
   * Obtém detalhes de uma assinatura
   */
  async getSubscription(subscriptionId: string): Promise<Stripe.Subscription> {
    try {
      return await this.stripe.subscriptions.retrieve(subscriptionId);
    } catch (error) {
      this.logger.error(`Failed to get subscription: ${error.message}`, error.stack);
      throw new Error(`Failed to retrieve subscription: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Cancela uma assinatura
   */
  async cancelUserSubscription(userId: string, subscriptionId: string): Promise<Stripe.Subscription> {
    try {
      const result = await this.stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: true,
      });

      // Atualiza o status no banco de dados
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          subscriptionStatus: 'canceling',
        },
      });

      return result;
    } catch (error) {
      this.logger.error(`Failed to cancel subscription: ${error.message}`, error.stack);
      throw new Error(`Failed to cancel subscription: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Recupera o cliente do Stripe por ID
   */
  async getCustomer(customerId: string): Promise<Stripe.Customer> {
    try {
      const customer = await this.stripe.customers.retrieve(customerId);
      if (customer.deleted) {
        throw new Error('Customer has been deleted');
      }
      return customer as Stripe.Customer;
    } catch (error) {
      this.logger.error(`Failed to get customer: ${error.message}`, error.stack);
      throw error;
    }
  }
}