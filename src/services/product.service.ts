import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    return await this.prisma.product.create({
      data,
    });
  }

  async updateProduct(id: string, data: UpdateProductDto) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        categoryId: data.categoryId,
        valuePromotionInPercent: data.valuePromotionInPercent,
        imageUrl: data.imageUrl,
      },
    });
  }

  async deleteProduct(id: string) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }

  async getProducts() {
    return await this.prisma.product.findMany();
  }

  async getProductByCategoryId(id: string) {
    return await this.prisma.product.findMany({
      where: {
        categoryId: id,
      },
    });
  }

  async getProductsWithPromotion() {
    return await this.prisma.product.findMany({
      where: {
        valuePromotionInPercent: {
          not: null,
        },
      },
    });
  }

  async getProductById(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async getProductsByName(name: string) {
    return await this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }
}
