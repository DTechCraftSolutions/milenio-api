import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateCouponDto } from '../dto/coupon.dto';

@Injectable()
export class CouponService {
  constructor(private prisma: PrismaService) {}

  async createCoupon(data: CreateCouponDto) {
    return await this.prisma.coupon.create({
      data,
    });
  }

  async deleteCoupon(id: string) {
    return await this.prisma.coupon.delete({ where: { id } });
  }

  async getAllCoupons() {
    return await this.prisma.coupon.findMany();
  }
}
