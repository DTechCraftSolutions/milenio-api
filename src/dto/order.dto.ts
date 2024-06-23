import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Array of cart items',
    type: () => [CartItemDto],
  })
  cartItems: CartItemDto[];

  @ApiProperty({ description: 'Send product' })
  send_product: boolean;

  @ApiProperty({ description: 'Payment status of the order' })
  paymentStatus: string;

  @ApiProperty({ description: 'Shipping cost in cents' })
  shippingCost: number;

  @ApiProperty({ description: 'Total amount in cents' })
  totalAmount: number;

  @ApiProperty({ description: 'Shipping address' })
  user_address: string;

  @ApiProperty({ description: 'User name' })
  user_name: string;

  @ApiProperty({ description: 'User email' })
  user_email: string;

  @ApiProperty({ description: 'User phone number' })
  user_telephone: string;

  @ApiProperty({ description: 'ID of coupon', required: false })
  @IsOptional()
  couponId: string; 
}

export class UpdateOrderDto {
  @ApiProperty({ description: 'Payment status of the order' })
  paymentStatus?: string | null;

  @ApiProperty({ description: 'Send product' })
  send_product?: boolean | null;

  @ApiProperty({ description: 'Shipping cost in cents' })
  shippingCost?: number | null;

  @ApiProperty({ description: 'Total amount in cents' })
  totalAmount?: number | null;

  @ApiProperty({ description: 'Shipping address' })
  user_address?: string | null;

  @ApiProperty({ description: 'User name' })
  user_name?: string | null;

  @ApiProperty({ description: 'User email' })
  user_email?: string | null;

  @ApiProperty({ description: 'User phone number' })
  user_telephone?: string | null;
}

class CartItemDto {
  @ApiProperty({ description: 'ID of the product' })
  productId: string;

  @ApiProperty({ description: 'Quantity of the product' })
  quantity: number;

  @ApiProperty({ description: 'ID of the variant' })
  variantId: string;

  @ApiProperty({ description: 'Observation of the product' })
  observation?: string;
}
