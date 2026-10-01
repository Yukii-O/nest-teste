import { Test, TestingModule } from '@nestjs/testing';
import { CostumersController } from './costumers.controller.js';
import { CostumersService } from './costumers.service.js';

describe('CostumersController', () => {
  let controller: CostumersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostumersController],
      providers: [CostumersService],
    }).compile();

    controller = module.get<CostumersController>(CostumersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
