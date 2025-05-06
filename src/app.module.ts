import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category.module';
import { ProductModule } from './modules/product.module';
import { CartItemModule } from './modules/cartItem.module';
import { OrderModule } from './modules/order.module';
import { CouponModule } from './modules/coupon.module';
import { DataModule } from './modules/data.module';
import { VariantModule } from './modules/variant.module';
import { BannerModule } from './modules/banner.module';
import { FreightModule } from './modules/freight.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    DataModule,
    CategoryModule,
    ProductModule,
    CartItemModule,
    OrderModule,
    CouponModule,
    VariantModule,
    BannerModule,
    FreightModule, 
    PaymentsModule
  ],
})
export class AppModule {}


