import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateOrderDto } from '../dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
        paymentStatus: data.paymentStatus,
        shippingCost: data.shippingCost,
        totalAmount: data.totalAmount,
        Adress: data.address,
        cartItem: {
          create: data.cartItems.map((item) => ({
            product: { connect: { id: item.productId } },
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async updatePaymentStatusForApproved(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'approved' },
    });
  }

  async updatePaymentStatusForPending(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'pending' },
    });
  }
}
