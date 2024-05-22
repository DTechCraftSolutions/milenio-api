import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category.module';
import { ProductModule } from './modules/product.module';
import { CartItemModule } from './modules/cartItem.module';
import { OrderModule } from './modules/order.module';
import { CouponModule } from './modules/coupon.module';

@Module({
  imports: [
    CategoryModule,
    ProductModule,
    CartItemModule,
    OrderModule,
    CouponModule,
  ],
})
export class AppModule {}
