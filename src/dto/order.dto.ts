import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Array of cart items',
    type: () => [CartItemDto],
  })
  cartItems: CartItemDto[];

  @ApiProperty({ description: 'Payment status of the order' })
  paymentStatus: string;

  @ApiProperty({ description: 'Shipping cost in cents' })
  shippingCost: number;

  @ApiProperty({ description: 'Total amount in cents' })
  totalAmount: number;

  @ApiProperty({ description: 'Shipping address' })
  address: string;
}

class CartItemDto {
  @ApiProperty({ description: 'ID of the product' })
  productId: string;

  @ApiProperty({ description: 'Quantity of the product' })
  quantity: number;
}
