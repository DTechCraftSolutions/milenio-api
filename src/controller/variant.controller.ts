import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VariantService } from '../services/variant.service';
import { CreateVariantDto, UpdateVariantDto } from '../dto/variant.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('variants')
@Controller('variants')
export class VariantController {
  constructor(private variantService: VariantService) {}

  @ApiOperation({ summary: 'Create a new variant' })
  @ApiResponse({
    status: 201,
    description: 'The variant has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async createVariant(@Body() data: CreateVariantDto) {
    return await this.variantService.createVariant(data);
  }

  @ApiOperation({ summary: 'Get all variants' })
  @ApiResponse({ status: 200, description: 'List of all variants.' })
  @Get('list')
  async getVariants() {
    return await this.variantService.getVariants();
  }

  @ApiOperation({ summary: 'Get a variant by ID' })
  @ApiResponse({ status: 200, description: 'The variant data.' })
  @ApiResponse({ status: 404, description: 'Variant not found.' })
  @Get(':id')
  async getVariantById(@Param('id') id: string) {
    return await this.variantService.getVariantById(id);
  }

  @ApiOperation({ summary: 'Update a variant' })
  @ApiResponse({
    status: 200,
    description: 'The variant has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Variant not found.' })
  @Put('update/:id')
  async updateVariant(@Param('id') id: string, @Body() data: UpdateVariantDto) {
    return await this.variantService.updateVariant(id, data);
  }

  @ApiOperation({ summary: 'Delete a variant' })
  @ApiResponse({
    status: 200,
    description: 'The variant has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Variant not found.' })
  @Delete('delete/:id')
  async deleteVariant(@Param('id') id: string) {
    return await this.variantService.deleteVariant(id);
  }

  @ApiOperation({ summary: 'Get variants by product ID' })
  @ApiResponse({ status: 200, description: 'List of variants.' })
  @Get('product/:id')
  async getVariantsByProductId(@Param('id') id: string) {
    return await this.variantService.getVariantsByProductId(id);
  }
}
