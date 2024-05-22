import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CouponService } from 'src/services/coupon.service';

@Controller('coupons')
export class CouponController {
  constructor(private couponService: CouponService) {}

  @Post('register')
  async createCoupon(@Body() data: Prisma.CouponCreateInput) {
    return await this.couponService.createCoupon(data);
  }

  @Delete('deleteCoupon/:id')
  async deleteCoupon(@Param() id: string) {
    return await this.couponService.deleteCoupon(id);
  }
}
