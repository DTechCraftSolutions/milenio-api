import { Module } from '@nestjs/common';
import { BannerController } from '../controller/banner.controller';
import { BannerService } from '../services/banner.service';

@Module({
  providers: [BannerService],
  controllers: [BannerController],
})
export class BannerModule {}
