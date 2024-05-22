import { Module } from '@nestjs/common';
import { CategoryController } from '../controller/category.controller';
import { CategoryService } from '../services/category.service';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
