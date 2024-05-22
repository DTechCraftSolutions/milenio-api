import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateCartItemDto {
  @ApiProperty({ description: 'ID of the product' })
  @IsString()
  productId: string;

  @ApiProperty({ description: 'Quantity of the product' })
  @IsInt()
  quantity: number;

  @ApiProperty({ description: 'ID of the order' })
  @IsString()
  orderId: string;
}

export class UpdateCartItemDto {
  @ApiProperty({ description: 'Quantity of the product' })
  @IsInt()
  quantity: number;
}
