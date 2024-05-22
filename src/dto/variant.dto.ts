import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateVariantDto {
  @ApiProperty({ description: 'Name of the variant' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Amount of the variant' })
  @IsInt()
  amount: number;

  @ApiProperty({ description: 'ID of the product', required: false })
  @IsOptional()
  @IsString()
  productId?: string;
}

export class UpdateVariantDto {
  @ApiProperty({ description: 'Name of the variant', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Amount of the variant', required: false })
  @IsOptional()
  @IsInt()
  amount?: number;

  @ApiProperty({ description: 'ID of the product', required: false })
  @IsOptional()
  @IsString()
  productId?: string;
}
