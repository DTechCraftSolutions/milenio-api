import { Module } from '@nestjs/common';
import { CartItemController } from '../controller/cartItem.controller';
import { CartItemService } from '../services/cartItem.service';

@Module({
  providers: [CartItemService],
  controllers: [CartItemController],
})
export class CartItemModule {}
