import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: Prisma.ProductCreateInput) {
    return await this.prisma.product.create({ data });
  }

  async updateProduct(id: string, data: Prisma.ProductUpdateInput) {
    return await this.prisma.product.update({
      where: { id },
      data,
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
