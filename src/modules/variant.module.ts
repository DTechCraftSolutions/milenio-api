import { Module } from '@nestjs/common';
import { VariantController } from 'src/controller/variant.controller';
import { VariantService } from 'src/services/variant.service';

@Module({
  providers: [VariantService],
  controllers: [VariantController],
})
export class VariantModule {}
