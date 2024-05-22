import { Module } from '@nestjs/common';
import { CouponController } from '../controller/coupon.controller';
import { CouponService } from '../services/coupon.service';

@Module({
  providers: [CouponService],
  controllers: [CouponController],
})
export class CouponModule {}
