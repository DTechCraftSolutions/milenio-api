import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controller/category.controller';
import { CategoryService } from 'src/services/category.service';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
