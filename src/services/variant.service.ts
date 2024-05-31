import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateVariantDto, UpdateVariantDto } from '../dto/variant.dto';

@Injectable()
export class VariantService {
  constructor(private prisma: PrismaService) {}

  async createVariant(data: CreateVariantDto) {
    return await this.prisma.variant.create({
      data,
    });
  }

  async updateVariant(id: string, data: UpdateVariantDto) {
    return await this.prisma.variant.update({
      where: { id },
      data,
    });
  }

  async deleteVariant(id: string) {
    return await this.prisma.variant.delete({ where: { id } });
  }

  async getVariants() {
    return await this.prisma.variant.findMany();
  }

  async getVariantById(id: string) {
    return await this.prisma.variant.findUnique({
      where: { id },
    });
  }
  async getVariantsByProductId(productId: string) {
    return await this.prisma.variant.findMany({
      where: { productId },
    });
  }
}
