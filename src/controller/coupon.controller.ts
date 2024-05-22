import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CouponService } from 'src/services/coupon.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCouponDto } from 'src/dto/coupon.dto';

@ApiTags('coupons')
@Controller('coupons')
export class CouponController {
  constructor(private couponService: CouponService) {}

  @ApiOperation({ summary: 'Create a new coupon' })
  @ApiResponse({
    status: 201,
    description: 'The coupon has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async createCoupon(@Body() data: CreateCouponDto) {
    return await this.couponService.createCoupon(data);
  }

  @ApiOperation({ summary: 'Delete a coupon' })
  @ApiResponse({
    status: 200,
    description: 'The coupon has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Coupon not found.' })
  @Delete('deleteCoupon/:id')
  async deleteCoupon(@Param('id') id: string) {
    return await this.couponService.deleteCoupon(id);
  }
}
