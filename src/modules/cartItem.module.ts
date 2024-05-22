import { Module } from '@nestjs/common';
import { CartItemController } from 'src/controller/cartItem.controller';
import { CartItemService } from 'src/services/cartItem.service';

@Module({
  providers: [CartItemService],
  controllers: [CartItemController],
})
export class CartItemModule {}
