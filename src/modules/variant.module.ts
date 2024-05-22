import { Module } from '@nestjs/common';
import { VariantController } from '../controller/variant.controller';
import { VariantService } from '../services/variant.service';

@Module({
  providers: [VariantService],
  controllers: [VariantController],
})
export class VariantModule {}
