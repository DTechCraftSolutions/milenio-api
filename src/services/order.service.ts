import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateOrderDto, UpdateOrderDto } from '../dto/order.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
        paymentStatus: data.paymentStatus,
        shippingCost: data.shippingCost,
        totalAmount: data.totalAmount,
        user_adress: data.user_address,
        user_name: data.user_name,
        user_email: data.user_email,
        user_telephone: data.user_telephone,
        send_product: data.send_product,
        cartItem: {
          create: data.cartItems.map((item) => ({
            product: { connect: { id: item.productId } },
            variant: { connect: { id: item.variantId } },
            quantity: item.quantity,
            observation: item.observation,
          })),
        },
      },
    });
  }

  async updateOrder(id: string, data: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id },
      data,
    });
  }

  async updatePaymentStatusForApproved(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'approved' },
    });
  }

  async getAllOrders() {
    return await this.prisma.order.findMany();
  }

  async updatePaymentStatusForPending(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'pending' },
    });
  }
}
