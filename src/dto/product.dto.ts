import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsInt()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  categoryId: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  valuePromotionInPercent?: number;

  @IsString()
  @ApiProperty()
  imageUrl: string;
}

export class UpdateProductDto {
  @IsString()
  @ApiProperty({ required: false })
  name?: string;

  @IsString()
  @ApiProperty({ required: false })
  description?: string;

  @IsInt()
  @ApiProperty({ required: false })
  price?: number;

  @IsString()
  @ApiProperty({ required: false })
  categoryId?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  valuePromotionInPercent?: number;

  @IsString()
  @ApiProperty({ required: false })
  imageUrl?: string;
}
