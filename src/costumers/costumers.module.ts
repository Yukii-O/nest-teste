import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service.js';
import { CostumersController } from './costumers.controller.js';

@Module({
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule {}
