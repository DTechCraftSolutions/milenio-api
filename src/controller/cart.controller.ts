import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CartService } from 'src/services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post('register')
  async createCart(@Body() data: Prisma.CartCreateInput) {
    return await this.cartService.createCart(data);
  }

  @Delete('delete/:id')
  async deleteCart(@Param() id: string) {
    return await this.cartService.deleteCart(id);
  }
}
