import { CreateBannerDto, UpdateBannerDto } from 'src/dto/banners.dto';
import { PrismaService } from './prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) {}

  async createBanner(data: CreateBannerDto) {
    return await this.prisma.imageBanner.create({
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
      },
    });
  }

  async getBannersAll() {
    return await this.prisma.imageBanner.findMany();
  }

  async updateBanner(id: string, data: UpdateBannerDto) {
    return await this.prisma.imageBanner.update({
      where: { id },
      data,
    });
  }

  async deleteBanner(id: string) {
    return await this.prisma.imageBanner.delete({
      where: { id },
    });
  }
}
