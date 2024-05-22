import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class CouponService {
  constructor(private prisma: PrismaService) {}

  async createCoupon(data: Prisma.CouponCreateInput) {
    return await this.prisma.coupon.create({ data });
  }

  async deleteCoupon(id: string) {
    return await this.prisma.coupon.delete({ where: { id } });
  }
}
