import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartItemService } from '../services/cartItem.service';
import { CreateCartItemDto, UpdateCartItemDto } from '../dto/cartItem.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('cart-items')
@Controller('cart-items')
export class CartItemController {
  constructor(private cartItemService: CartItemService) {}

  @ApiOperation({ summary: 'Create a new cart item' })
  @ApiResponse({
    status: 201,
    description: 'The cart item has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async createCartItem(@Body() data: CreateCartItemDto) {
    return await this.cartItemService.createCartItem(data);
  }

  @ApiOperation({ summary: 'Update a cart item' })
  @ApiResponse({
    status: 200,
    description: 'The cart item has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Cart item not found.' })
  @Put('update-quantity/:id')
  async updateCartItem(
    @Param('id') id: string,
    @Body() data: UpdateCartItemDto,
  ) {
    return await this.cartItemService.updateCartItem(id, data);
  }

  @ApiOperation({ summary: 'Delete a cart item' })
  @ApiResponse({
    status: 200,
    description: 'The cart item has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Cart item not found.' })
  @Delete('delete/:id')
  async deleteCartItem(@Param('id') id: string) {
    return await this.cartItemService.deleteCartItem(id);
  }

  @ApiOperation({ summary: 'Get cart items by order id' })
  @ApiResponse({
    status: 200,
    description: 'The cart items have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Cart item not found.' })
  @Post('orderId/:orderId')
  async getCartItemsByOrderId(@Param('orderId') orderId: string) {
    return await this.cartItemService.getCartItemsByOrderId(orderId);
  }
}
