import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CartItemService {
  constructor(private prisma: PrismaService) {}

  async createCartItem(data: Prisma.CartItemCreateInput) {
    return await this.prisma.cartItem.create({ data });
  }

  async updateCartItem(quantity: number, id: string) {
    return await this.prisma.cartItem.update({
      where: { id },
      data: { quantity },
    });
  }
}
