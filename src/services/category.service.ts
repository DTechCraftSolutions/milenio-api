import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    return await this.prisma.category.findMany();
  }

  async createCategory(data: CreateCategoryDto) {
    return await this.prisma.category.create({
      data,
    });
  }

  async updateCategory(id: string, data: UpdateCategoryDto) {
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
