import { Module } from '@nestjs/common';
import { FreightService } from '../services/freight.service';
import { FreightController } from 'src/controller/freight.controller';

@Module({
  providers: [FreightService],
  controllers: [FreightController],
})
export class FreightModule {}
