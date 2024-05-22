import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category.module';
import { ProductController } from './controller/product.controller';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [CategoryModule, ProductModule],
})
export class AppModule {}
