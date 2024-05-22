import { Module } from '@nestjs/common';
import { CouponController } from 'src/controller/coupon.controller';
import { CouponService } from 'src/services/coupon.service';

@Module({
  imports: [CouponService],
  controllers: [CouponController],
})
export class CouponModule {}
