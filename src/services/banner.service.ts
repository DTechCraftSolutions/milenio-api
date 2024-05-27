import { PrismaService } from './prisma.service';
import { CreateBannerDto, UpdateBannerDto } from 'src/dto/banner.dto';
export class BannerService {
  constructor(private prisma: PrismaService) {}

  async createBanner(data: CreateBannerDto) {
    return await this.prisma.banner.create({
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
      },
    });
  }

  async deleteBanner(id: string) {
    return await this.prisma.banner.delete({
      where: {
        id,
      },
    });
  }

  async getAllBanners() {
    return await this.prisma.banner.findMany();
  }

  async updateBanner(id: string, data: UpdateBannerDto) {
    return await this.prisma.banner.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
      },
    });
  }
}
