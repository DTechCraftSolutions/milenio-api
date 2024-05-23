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
