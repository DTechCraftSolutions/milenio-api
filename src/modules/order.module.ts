import { Module } from '@nestjs/common';
import { OrderController } from 'src/controller/order.controller';
import { OrderService } from 'src/services/order.service';

@Module({
  imports: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
