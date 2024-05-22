import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CartItemService } from 'src/services/cartItem.service';
@Controller('cart-item')
export class CartItemController {
  constructor(private cartItemService: CartItemService) {}

  @Post('register')
  async createCartItem(@Body() data: Prisma.CartItemCreateInput) {
    return await this.cartItemService.createCartItem(data);
  }

  @Put('update-quantity/:id')
  async updateCartItem(@Body() quantity: number, @Param() id: string) {
    return await this.cartItemService.updateCartItem(quantity, id);
  }

  @Delete('delete/:id')
  async deleteCartItem(@Param() id: string) {
    return await this.cartItemService.deleteCartItem(id);
  }
}
