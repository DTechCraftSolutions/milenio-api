import { Module } from '@nestjs/common';
import { OrderController } from '../controller/order.controller';
import { OrderService } from '../services/order.service';
import { PaymentsModule } from '../payments/payments.module';

@Module({
  imports: [PaymentsModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
