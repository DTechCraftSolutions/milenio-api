import {
  Body,
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';
import { Prisma } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('register')
  async createCategory(@Body() data: Prisma.CategoryCreateInput) {
    return await this.categoryService.createCategory(data);
  }

  @Get('list')
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Put('update/:id')
  async updateCategory(
    @Body() data: Prisma.CategoryUpdateInput,
    @Param() id: string,
  ) {
    return await this.categoryService.updateCategory(id, data);
  }

  @Delete('delete/:id')
  async deleteCategory(@Param() id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
