import { Body, Controller, Param, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { OrderService } from 'src/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() data: Prisma.OrderCreateInput) {
    return await this.orderService.createOrder(data);
  }

  @Post('/aproved/:id')
  async updatePaymentStatusforAproved(@Param() id: string) {
    return await this.orderService.updatePaymentStatusforAproved(id);
  }

  @Post('/pending/:id')
  async updatePaymentStatusforPending(@Param() id: string) {
    return await this.orderService.updatePaymentStatusforPending(id);
  }
}
