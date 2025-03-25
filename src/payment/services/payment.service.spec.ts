import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import { PrismaService } from '../../prisma.service';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

jest.mock('stripe');

describe('PaymentService', () => {
  let service: PaymentService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentService,
        {
          provide: PrismaService,
          useValue: {
            paymentSession: {
              create: jest.fn(function(this: void) { }),
              updateMany: jest.fn(() => { }),
            },
            user: {
              update: jest.fn(() => { }),
              findUnique: jest.fn(() => { }),
            },
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key) => {
              if (key === 'STRIPE_SECRET_KEY') return 'sk_test_123';
              if (key === 'STRIPE_WEBHOOK_SECRET') return 'whsec_123';
              return null;
            }),
          },
        },
      ],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
    service = module.get<PaymentService>(PaymentService);
    prismaService = module.get<PrismaService>(PrismaService);
    });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createCheckoutSession', () => {
    it('should create a checkout session', async () => {
      const mockSession = {
        id: 'cs_test_123',
        url: 'https://checkout.stripe.com/123',
      };

      (Stripe.prototype.checkout.sessions.create as jest.Mock).mockResolvedValue(mockSession);

      const result = await service.createCheckoutSession(
        'price_123',
        'user_123',
        'VIRTUAL',
        'test@example.com',
        'Test User',
        'https://example.com/success',
        'https://example.com/cancel',
      );

      expect(result).toEqual({ session: mockSession, error: null });
      expect(prismaService.paymentSession.create.bind(prismaService.paymentSession)).toHaveBeenCalled();
    });

    it('should handle errors when creating checkout session', async () => {
      (Stripe.prototype.checkout.sessions.create as jest.Mock).mockRejectedValue(
        new Error('Stripe error'),
      );

      const result = await service.createCheckoutSession(
        'price_123',
        'user_123',
        'VIRTUAL',
        'test@example.com',
        'Test User',
        'https://example.com/success',
        'https://example.com/cancel',
      );

      expect(result.session).toBeNull();
      expect(result.error).toContain('Failed to create checkout session');
    });
  });

  describe('verifySession', () => {
    it('should verify a successful payment session', async () => {
      const mockSession = {
        id: 'cs_test_123',
        payment_status: 'paid',
        subscription: 'sub_123',
        metadata: { userId: 'user_123', planType: 'VIRTUAL' },
      };

      const mockSubscription = {
        id: 'sub_123',
        status: 'active',
      };

      (Stripe.prototype.checkout.sessions.retrieve as jest.Mock).mockResolvedValue(mockSession);
      (Stripe.prototype.subscriptions.retrieve as jest.Mock).mockResolvedValue(mockSubscription);

      const result = await service.verifySession('cs_test_123');

      expect(result.success).toBeTruthy();
      expect(result.subscriptionStatus).toBe('active');
      expect(prismaService.user.update.bind(prismaService.user)).toHaveBeenCalled();
    });
  });

  describe('handleWebhookEvent', () => {
    it('should process webhook events', async () => {
      const mockEvent = {
        type: 'checkout.session.completed',
        data: {
          object: {
            id: 'cs_test_123',
            subscription: 'sub_123',
            metadata: { userId: 'user_123', planType: 'VIRTUAL' },
          },
        },
      };

      (Stripe.prototype.webhooks.constructEvent as jest.Mock).mockReturnValue(mockEvent);

      const result = await service.handleWebhookEvent('signature', Buffer.from('payload'));

      expect(result).toEqual({ received: true });
      expect(prismaService.paymentSession.updateMany.bind(prismaService.paymentSession)).toHaveBeenCalled();
      expect(prismaService.user.update.bind(prismaService.user)).toHaveBeenCalled();
    });
  });
})