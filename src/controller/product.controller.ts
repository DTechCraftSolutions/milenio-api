import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({ summary: 'Register a new product' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async registerProduct(@Body() data: CreateProductDto) {
    return await this.productService.createProduct(data);
  }

  @ApiOperation({ summary: 'Update an existing product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Put('update/:id')
  async updateProduct(@Body() data: UpdateProductDto, @Param('id') id: string) {
    return await this.productService.updateProduct(id, data);
  }

  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Delete('delete/:id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }

  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({ status: 200, description: 'List of products.' })
  @Get('list')
  async getProducts() {
    return await this.productService.getProducts();
  }

  @ApiOperation({ summary: 'List products by category' })
  @ApiResponse({ status: 200, description: 'List of products by category.' })
  @Post('listByCategory/:categoryId')
  async getProductByCategoryId(@Param('categoryId') categoryId: string) {
    return await this.productService.getProductByCategoryId(categoryId);
  }

  @ApiOperation({ summary: 'List products with promotions' })
  @ApiResponse({
    status: 200,
    description: 'List of products with promotions.',
  })
  @Get('listPromotion')
  async getProductsWithPromotion() {
    return await this.productService.getProductsWithPromotion();
  }

  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiResponse({ status: 200, description: 'Product details.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Post('getById/:id')
  async getProductById(@Param('id') id: string) {
    return await this.productService.getProductById(id);
  }

  @ApiOperation({ summary: 'Get products by name' })
  @ApiResponse({
    status: 200,
    description: 'List of products matching the name.',
  })
  @Post('getByName/:name')
  async getProductsByName(@Param('name') name: string) {
    return await this.productService.getProductsByName(name);
  }
}
