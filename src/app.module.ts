import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category.module';
import { ProductModule } from './modules/product.module';
import { CartModule } from './modules/cart.module';
import { CartItemModule } from './modules/cartItem.module';

@Module({
  imports: [CategoryModule, ProductModule, CartModule, CartItemModule],
})
export class AppModule {}
