import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  categoryId: string;

  @ApiProperty({ required: false })
  valuePromotionInPercent?: number;

  @ApiProperty()
  imageUrl: string;
}

export class UpdateProductDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  price?: number;

  @ApiProperty({ required: false })
  categoryId?: string;

  @ApiProperty({ required: false })
  valuePromotionInPercent?: number;

  @ApiProperty({ required: false })
  imageUrl?: string;
}
