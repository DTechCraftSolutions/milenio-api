import { Module } from '@nestjs/common';
import { CartController } from 'src/controller/cart.controller';
import { CartService } from 'src/services/cart.service';

@Module({
  imports: [CartService],
  controllers: [CartController],
})
export class CartModule {}
