import { IsBoolean, IsEmail, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsBoolean()
  @IsOptional()
  send_product?: boolean;

  @IsString()
  @IsOptional()
  paymentStatus?: string;

  @IsInt()
  shippingCost: number;

  @IsInt()
  totalAmount: number;

  @IsUUID()
  @IsOptional()
  couponId?: string;

  @IsString()
  @IsOptional()
  user_adress?: string;

  @IsString()
  @IsOptional()
  user_telephone?: string;

  @IsString()
  @IsOptional()
  user_name?: string;

  @IsEmail()
  @IsOptional()
  user_email?: string;
} 