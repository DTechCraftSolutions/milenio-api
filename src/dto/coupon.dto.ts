import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDate } from 'class-validator';

export class CreateCouponDto {
  @ApiProperty({ description: 'Unique code of the coupon' })
  @IsString()
  code: string;

  @ApiProperty({ description: 'Discount amount in cents' })
  @IsInt()
  discount: number;

  @ApiProperty({ description: 'Type of the discount' })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Expiration date of the coupon' })
  @IsDate()
  expiresIn: Date;
}

export class UpdateCouponDto {
  @ApiProperty({ description: 'Unique code of the coupon' })
  @IsString()
  code?: string;

  @ApiProperty({ description: 'Discount amount in cents' })
  @IsInt()
  discount?: number;

  @ApiProperty({ description: 'Type of the discount' })
  @IsString()
  type?: string;

  @ApiProperty({ description: 'Expiration date of the coupon' })
  @IsDate()
  expiresIn?: Date;
}
