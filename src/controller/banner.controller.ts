import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBannerDto } from '../dto/banners.dto';
import { BannerService } from '../services/banner.service';

@ApiTags('Banners')
@Controller('banners')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @ApiOperation({ summary: 'Create a new banner' })
  @ApiResponse({
    status: 201,
    description: 'The banner has successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('create')
  async createBanner(@Body() data: CreateBannerDto) {
    return await this.bannerService.createBanner({
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });
  }

  @ApiOperation({ summary: 'Get all banners' })
  @ApiResponse({
    status: 201,
    description: 'The banners have successfully retrieved.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('get-all')
  async getBanners() {
    return await this.bannerService.getBannersAll();
  }

  @ApiOperation({ summary: 'Update a banner' })
  @ApiResponse({
    status: 201,
    description: 'The banner has successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put('update/:id')
  async updateBanner(@Param('id') id: string, @Body() data: CreateBannerDto) {
    return await this.bannerService.updateBanner(id, {
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });
  }

  @ApiOperation({ summary: 'Delete a banner' })
  @ApiResponse({
    status: 201,
    description: 'The banner has successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete('delete/:id')
  async deleteBanner(@Param('id') id: string) {
    return await this.bannerService.deleteBanner(id);
  }
}
