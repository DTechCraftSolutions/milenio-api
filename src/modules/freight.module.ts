import { Module } from '@nestjs/common';
import { FreightService } from 'src/services/freight.service';
import { FreightController } from 'src/controller/freight.controller';

@Module({
  providers: [FreightService],
  controllers: [FreightController],
})
export class FreightModule {}
