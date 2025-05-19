import { Body, Controller, Param, Post, Put, Get, Query, NotFoundException } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateOrderDto, UpdateOrderDto } from '../dto/order.dto';
import axios from 'axios';
import { WebhookPaymentDto } from '../dto/webhook-payment.dto';
import { PaymentsService } from '../payments/payments.service';
import { PrismaService } from 'src/services/prisma.service';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly paymentsService: PaymentsService,
    private readonly prisma: PrismaService
  ) { }

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
  async getAllOrders(@Query('status') status: string, @Query('page') page: string) {
    return await this.orderService.getAllOrders({ status, page });
  }

  @ApiOperation({ summary: 'Approve an order payment' })
  @ApiResponse({
    status: 200,
    description: 'Payment webhook processed successfully.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @Post('payment/webhook')
async updatePaymentStatusForApproved(@Body() data: WebhookPaymentDto) {
  try {
    console.log('Webhook received:', data);
    
    // Registra a transação inicial
    await this.prisma.transaction.create({
      data: {
        orderId: data.payment.id,
        data: JSON.stringify(data)
      }
    });

    // Processa diferentes eventos
    switch (data.event) {
      case 'PAYMENT_CONFIRMED':
        const payment = await this.paymentsService.findByAsaasId(data.payment.paymentLink);
        
        await this.prisma.transaction.create({
          data: {
            orderId: data.payment.id,
            data: "evento de pagamento recebido"
          }
        });
        
        if (!payment) {
          await this.prisma.transaction.create({
            data: {
              orderId: data.payment.id,
              data: "pagamento não encontrado"
            }
          });
          
          // Retorna 200 mesmo quando não encontra o pagamento
          return {
            message: 'Payment not found in our database',
            event: data.event
          };
        }

        await this.paymentsService.updatePaymentStatus(payment.id, 'APPROVED');
        await this.orderService.updatePaymentStatusForApproved(payment.orderId);
        
        return {
          message: 'Payment approved successfully',
          event: data.event
        };

      case 'PAYMENT_CREATED':
      case 'PAYMENT_PENDING':
      case 'PAYMENT_CONFIRMED':
      // Adicione outros casos conforme necessário
        return {
          message: `Event ${data.event} processed successfully`,
          event: data.event
        };

      default:
        return {
          message: 'Webhook received but no action taken',
          event: data.event
        };
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    
    // Registra o erro
    await this.prisma.transaction.create({
      data: {
        orderId: data.payment.id,
        data: `Error processing webhook: ${error.message}`
      }
    });

    // Ainda retorna 200 para o Asaas
    return {
      message: 'Error processing webhook, but received',
      event: data.event,
      error: error.message
    };
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

  @Put('cancel/:id')
  async cancelOrder(@Param('id') id: string) {
    return await this.orderService.cancelOrder(id);
  }
}
