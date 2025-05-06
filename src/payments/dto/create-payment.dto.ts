import { IsNotEmpty, IsNumber, IsString, IsUUID, IsUrl } from 'class-validator';

export class CreatePaymentDto {
  @IsUUID()
  @IsNotEmpty()
  orderId: string;

  @IsString()
  @IsNotEmpty()
  asaasId: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  status: string;
} 