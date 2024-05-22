import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: Prisma.OrderCreateInput) {
    return await this.prisma.order.create({ data });
  }

  async updatePaymentStatusforAproved(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'paid' },
    });
  }

  async updatePaymentStatusforPending(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'pending' },
    });
  }
}
