import { Module } from '@nestjs/common';
import { CostumersService } from './costumers.service.js';
import { CostumersController } from './costumers.controller.js';

import { DatabaseModule } from '../common/database/database.module.js';
import { Costumer } from './entities/costumer.entity.js'


@Module({
  imports: [DatabaseModule.forFeature([Costumer] as any)], //dynamic modules -- parecido com forRoot
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule {}
