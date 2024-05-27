import { Module } from '@nestjs/common';
import { BannerController } from 'src/controller/banner.controller';
import { BannerService } from 'src/services/banner.service';

@Module({
  providers: [BannerService],
  controllers: [BannerController],
})
export class BannerModule {}
