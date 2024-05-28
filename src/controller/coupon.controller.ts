import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CouponService } from '../services/coupon.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateCouponDto, UpdateCouponDto } from '../dto/coupon.dto';

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

  @ApiOperation({ summary: 'Get all coupons' })
  @ApiResponse({
    status: 200,
    description: 'The coupons have been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Coupons not found.' })
  @Get('get-all')
  async getAllCoupons() {
    return await this.couponService.getAllCoupons();
  }

  @ApiOperation({ summary: 'Update a coupon' })
  @ApiResponse({
    status: 200,
    description: 'The coupon has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Coupon not found.' })
  @Put('updateCoupon/:id')
  async updateCoupon(@Param('id') id: string, @Body() data: UpdateCouponDto) {
    return await this.couponService.updateCoupon(id, data);
  }
}
