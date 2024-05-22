import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ description: 'Name of the category' })
  @IsString()
  name: string;
}

export class UpdateCategoryDto {
  @ApiProperty({ description: 'Name of the category' })
  @IsString()
  name: string;
}
