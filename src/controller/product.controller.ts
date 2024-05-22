import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from 'src/services/product.service';
import { Prisma } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('register')
  async registerProduct(@Body() data: Prisma.ProductCreateInput) {
    return await this.productService.createProduct(data);
  }

  @Put('update/:id')
  async updateProduct(
    @Body() data: Prisma.ProductUpdateInput,
    @Param() id: string,
  ) {
    return await this.productService.updateProduct(id, data);
  }

  @Delete('delete/:id')
  async deleteProduct(@Param() id: string) {
    return await this.productService.deleteProduct(id);
  }

  @Get('list')
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Post('listByCategory/:categoryId')
  async getProductByCategoryId(@Param() categoryId: string) {
    return await this.productService.getProductByCategoryId(categoryId);
  }

  @Get('listPromotion')
  async getProductsWithPromotion() {
    return await this.productService.getProductsWithPromotion();
  }

  @Post('getById/:id')
  async getProductById(@Param() id: string) {
    return await this.productService.getProductById(id);
  }

  @Post('getByName/:name')
  async getProductsByName(@Param() name: string) {
    return await this.productService.getProductsByName(name);
  }
}
