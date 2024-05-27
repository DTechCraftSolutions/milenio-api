import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateBannerDto {
  @ApiProperty({ description: 'Banner name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Banner description' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Banner image url' })
  @IsString()
  imageUrl: string;
}

export class UpdateBannerDto {
  @ApiProperty({ description: 'Banner name' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Banner description' })
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Banner image url' })
  @IsString()
  imageUrl?: string;
}
