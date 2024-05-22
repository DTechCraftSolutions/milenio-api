import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

Injectable();
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async getCategories() {
    return await this.prisma.category.findMany();
  }

  async createCategory(data: Prisma.CategoryCreateInput) {
    return await this.prisma.category.create({
      data,
    });
  }

  async updateCategory(id: string, data: Prisma.CategoryUpdateInput) {
    return await this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async deleteCategory(id: string) {
    return await this.prisma.category.delete({
      where: { id },
    });
  }
}
