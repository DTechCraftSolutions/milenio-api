import {
  Body,
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async createCategory(@Body() data: CreateCategoryDto) {
    return await this.categoryService.createCategory(data);
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, description: 'List of all categories.' })
  @Get('list')
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @ApiOperation({ summary: 'Get a category' })
  @ApiResponse({ status: 200, description: 'The category.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @Get('get-category/:id')
  async getCategory(@Param('id') id: string) {
    return await this.categoryService.getCategory(id);
  }

  @ApiOperation({ summary: 'Update a category' })
  @ApiResponse({
    status: 200,
    description: 'The category has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @Put('update/:id')
  async updateCategory(
    @Body() data: UpdateCategoryDto,
    @Param('id') id: string,
  ) {
    return await this.categoryService.updateCategory(id, data);
  }

  @ApiOperation({ summary: 'Delete a category' })
  @ApiResponse({
    status: 200,
    description: 'The category has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
