import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBannerDto, UpdateBannerDto } from 'src/dto/banner.dto';
import { BannerService } from 'src/services/banner.service';

@ApiTags('Banner')
@Controller('banner')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @ApiOperation({ summary: 'Create Banner' })
  @Post('create-banner')
  async createBanner(@Body() data: CreateBannerDto) {
    return await this.bannerService.createBanner(data);
  }

  @ApiOperation({ summary: 'Get All Banners' })
  @Get('get-all-banners')
  async getAllBanners() {
    return await this.bannerService.getAllBanners();
  }

  @ApiOperation({ summary: 'Get Banner By Id' })
  @Delete('delete-banner/:id')
  async deleteBanner(@Param() id: string) {
    return await this.bannerService.deleteBanner(id);
  }

  @ApiOperation({ summary: 'Update Banner' })
  @Put('update-banner/:id')
  async updateBanner(@Param() id: string, @Body() data: UpdateBannerDto) {
    return await this.bannerService.updateBanner(id, data);
  }
}
