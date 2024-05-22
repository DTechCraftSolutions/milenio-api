import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category.module';
import { ProductModule } from './modules/product.module';
import { CartItemModule } from './modules/cartItem.module';
import { OrderModule } from './modules/order.module';

@Module({
  imports: [CategoryModule, ProductModule, CartItemModule, OrderModule],
})
export class AppModule {}
