import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateCartItemDto, UpdateCartItemDto } from 'src/dto/cartItem.dto';

@Injectable()
export class CartItemService {
  constructor(private prisma: PrismaService) {}

  async createCartItem(data: CreateCartItemDto) {
    return await this.prisma.cartItem.create({
      data,
    });
  }

  async updateCartItem(id: string, data: UpdateCartItemDto) {
    return await this.prisma.cartItem.update({
      where: { id },
      data,
    });
  }

  async deleteCartItem(id: string) {
    return await this.prisma.cartItem.delete({ where: { id } });
  }
}
