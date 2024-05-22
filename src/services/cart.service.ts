import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async createCart(data: Prisma.CartCreateInput) {
    return await this.prisma.cart.create({ data });
  }
}
