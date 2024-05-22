import { Module } from '@nestjs/common';
import { ProductController } from '../controller/product.controller';
import { ProductService } from '../services/product.service';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
