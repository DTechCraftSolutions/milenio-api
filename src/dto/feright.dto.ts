import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class CreateFreightDto {
  @ApiProperty({ description: 'Nome da cidade do frete' })
  @IsString()
  city: string;

  @ApiProperty({ description: 'CEP do frete' })
  @IsString()
  cep: string;

  @ApiProperty({ description: 'Preço do frete em centavos' })
  @IsInt()
  price: number;
}

export class UpdateFreightDto {
  @ApiProperty({ description: 'Nome da cidade do frete', required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ description: 'CEP do frete', required: false })
  @IsOptional()
  @IsString()
  cep?: string;

  @ApiProperty({ description: 'Preço do frete em centavos', required: false })
  @IsOptional()
  @IsInt()
  price?: number;
}

export class FreightDto {
  @ApiProperty({ description: 'ID do frete' })
  @IsUUID()
  id: string;

  @ApiProperty({ description: 'Nome da cidade do frete' })
  @IsString()
  city: string;

  @ApiProperty({ description: 'CEP do frete' })
  @IsString()
  cep: string;

  @ApiProperty({ description: 'Preço do frete em centavos' })
  @IsInt()
  price: number;

  @ApiProperty({ description: 'Data de criação do frete' })
  createdAt: Date;
}
