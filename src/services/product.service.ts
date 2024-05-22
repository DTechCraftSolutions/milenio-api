import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDto) {
    const { categoryId, ...productData } = data;
    return await this.prisma.product.create({
      data: {
        ...productData,
        category: {
          connect: { id: categoryId },
        },
      },
    });
  }

  async updateProduct(id: string, data: UpdateProductDto) {
    const { categoryId, ...updateData } = data;
    if (categoryId) {
      return await this.prisma.product.update({
        where: { id },
        data: {
          ...updateData,
          category: {
            connect: { id: categoryId },
          },
        },
      });
    } else {
      return await this.prisma.product.update({
        where: { id },
        data: updateData,
      });
    }
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
