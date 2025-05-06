import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        send_product: createOrderDto.send_product ?? false,
        paymentStatus: createOrderDto.paymentStatus,
        shippingCost: createOrderDto.shippingCost,
        totalAmount: createOrderDto.totalAmount,
        couponId: createOrderDto.couponId,
        user_adress: createOrderDto.user_adress,
        user_telephone: createOrderDto.user_telephone,
        user_name: createOrderDto.user_name,
        user_email: createOrderDto.user_email,
      },
      include: {
        cartItem: true,
        Coupon: true,
        Payment: true,
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        cartItem: true,
        Coupon: true,
        Payment: true,
      },
    });
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        cartItem: true,
        Coupon: true,
        Payment: true,
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
      include: {
        cartItem: true,
        Coupon: true,
        Payment: true,
      },
    });
  }

  async remove(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    return this.prisma.order.delete({
      where: { id },
    });
  }
} 