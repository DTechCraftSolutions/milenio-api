import { Module } from '@nestjs/common';
import { CartItemController } from 'src/controller/cartItem.controller';
import { CartItemService } from 'src/services/cartItem.service';

@Module({
  imports: [CartItemService],
  controllers: [CartItemController],
})
export class CartItemModule {}
