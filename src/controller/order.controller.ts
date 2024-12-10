import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateOrderDto, UpdateOrderDto } from '../dto/order.dto';
import axios from 'axios';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) { }

  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('register')
  async createOrder(@Body() data: CreateOrderDto) {
    return await this.orderService.createOrder(data);
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({
    status: 200,
    description: 'The orders have been successfully retrieved.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('getAll')
  async getAllOrders() {
    return await this.orderService.getAllOrders();
  }

  @ApiOperation({ summary: 'Approve an order payment' })
  @ApiResponse({
    status: 200,
    description:
      'The order payment status has been successfully updated to approved.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @Post('approved/:id')
  async updatePaymentStatusForApproved(@Param('id') id: string, @Body() data) {
    await this.orderService.createTransaction({ orderId: id, data });
    if(data.topic === 'payment'){
      if(data.resource){
        const payment = await axios.get(`https://api.mercadopago.com/v1/payments/${data.resource}`, {
          headers: {
            Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
          },
        })
        if(payment.data.status === 'approved'){
          return await this.orderService.updatePaymentStatusForApproved(id);
        }
      }
    }
    return {
      message: 'Payment not approved',
    }
  }

  @ApiOperation({ summary: 'Set order payment status to pending' })
  @ApiResponse({
    status: 200,
    description:
      'The order payment status has been successfully updated to pending.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @Post('pending/:id')
  async updatePaymentStatusForPending(@Param('id') id: string) {
    return await this.orderService.updatePaymentStatusForPending(id);
  }

  @ApiOperation({ summary: 'Update an order' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @Put('update/:id')
  async updateOrder(@Param('id') id: string, @Body() data: UpdateOrderDto) {
    return await this.orderService.updateOrder(id, data);
  }
}
