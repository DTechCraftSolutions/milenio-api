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

  @ApiProperty({description: 'length of the variant', required: false})
  @IsOptional()
  @IsInt()
  length?: number;

  @ApiProperty({description: 'width of the variant', required: false})
  @IsOptional()
  @IsInt()
  width?: number;

  @ApiProperty({description: 'height of the variant', required: false})
  @IsOptional()
  @IsInt()
  height?: number;

  @ApiProperty({description: 'weight of the variant', required: false})
  @IsOptional()
  @IsInt()
  weight?: number;
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
  
  @ApiProperty({description: 'length of the variant', required: false})
  @IsOptional()
  @IsInt()
  length?: number;

  @ApiProperty({description: 'width of the variant', required: false})
  @IsOptional()
  @IsInt()
  width?: number;

  @ApiProperty({description: 'height of the variant', required: false})
  @IsOptional()
  @IsInt()
  height?: number;

  @ApiProperty({description: 'weight of the variant', required: false})
  @IsOptional()
  @IsInt()
  weight?: number;

}
