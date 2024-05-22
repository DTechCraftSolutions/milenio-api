import { Module } from '@nestjs/common';
import { ProductController } from 'src/controller/product.controller';
import { ProductService } from 'src/services/product.service';

@Module({
  imports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
