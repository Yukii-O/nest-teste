import { Inject, Injectable } from '@nestjs/common';
import { CreateCostumerDto } from './dto/create-costumer.dto.js';
import { UpdateCostumerDto } from './dto/update-costumer.dto.js';

import { MockRepository } from '../common/database/database.module.js'

@Injectable()
export class CostumersService {
  constructor(
    @Inject('COSTUMER_REPOSITORY') 
    private readonly costumerRepository: MockRepository) {
      console.info(costumerRepository)
    }

  create(createCostumerDto: CreateCostumerDto) {
    return 'This action adds a new costumer';
  }

  findAll() {
    return `This action returns all costumers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costumer`;
  }

  update(id: number, updateCostumerDto: UpdateCostumerDto) {
    return `This action updates a #${id} costumer`;
  }

  remove(id: number) {
    return `This action removes a #${id} costumer`;
  }
}
