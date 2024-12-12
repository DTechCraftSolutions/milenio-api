import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateOrderDto, UpdateOrderDto } from '../dto/order.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(data: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
        paymentStatus: data.paymentStatus,
        shippingCost: data.shippingCost,
        totalAmount: data.totalAmount,
        user_adress: data.user_address,
        user_name: data.user_name,
        user_email: data.user_email,
        user_telephone: data.user_telephone,
        send_product: data.send_product,
        cartItem: {
          create: data.cartItems.map((item) => ({
            product: { connect: { id: item.productId } },
            variant: { connect: { id: item.variantId } },
            quantity: item.quantity,
            observation: item.observation,
          })),
        },
      },
    });
  }

  async updateOrder(id: string, data: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id },
      data,
    });
  }

  async createTransaction(data: { orderId: string; data: any }) {
    return await this.prisma.transaction.create({
      data,
    });
  }

  async updatePaymentStatusForApproved(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'approved' },
    });
  }

  async getAllOrders({ status, page }: { status: string; page: string }) {
    const whereCondition = {
      paymentStatus: status === '' ? undefined : status,
    };

    // Conta o número total de registros
    const totalCount = await this.prisma.order.count({
      where: whereCondition,
    });

    // Calcula o número total de páginas
    const totalPages = Math.ceil(totalCount / 10);

    // Busca os registros paginados
    const orders = await this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: { cartItem: true },
      where: whereCondition,
      skip: (Number(page) - 1) * 10,
      take: 10,
    });

    // Usa Promise.all para carregar os dados de produtos e variantes de forma paralela
    const enrichedOrders = await Promise.all(
      orders.map(async (order) => {
        const enrichedCartItems = await Promise.all(
          order.cartItem.map(async (item) => {
            const [product, variant] = await Promise.all([
              this.prisma.product.findUnique({
                where: { id: item.productId },
              }),
              this.prisma.variant.findUnique({
                where: { id: item.variantId },
              }),
            ]);

            return {
              ...item,
              product,
              variant,
            };
          }),
        );

        return {
          ...order,
          cartItem: enrichedCartItems,
        };
      }),
    );

    // Retorna os registros e metadados
    return {
      data: enrichedOrders,
      meta: {
        totalCount,
        totalPages,
        currentPage: Number(page),
        pageSize: 10,
      },
    };
  }

  async updatePaymentStatusForPending(id: string) {
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'pending' },
    });
  }

  async cancelOrder(id: string) {
    // Busca o pedido com os itens do carrinho
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { cartItem: true },
    });
  
    if (!order) {
      throw new Error('Order not found');
    }
  
    // Atualiza os estoques das variantes
    await Promise.all(
      order.cartItem.map(async (item) => {
        if (!item.variantId) {
          throw new Error(`Variant ID not found for cart item ${item.id}`);
        }
  
        await this.prisma.variant.update({
          where: { id: item.variantId }, // Usa o variantId correto
          data: { amount: { increment: item.quantity } }, // Incrementa o estoque
        });
      }),
    );
  
    return await this.prisma.order.update({
      where: { id },
      data: { paymentStatus: 'canceled' },
    });
  }
  
}
