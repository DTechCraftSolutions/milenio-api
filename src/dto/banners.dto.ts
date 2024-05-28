import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateBannerDto {
  @ApiProperty({ description: 'name of banner' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'description of banner' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'image url of banner' })
  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}

export class UpdateBannerDto {
  @ApiProperty({ description: 'name of banner' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'description of banner' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'image url of banner' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  imageUrl?: string;
}
