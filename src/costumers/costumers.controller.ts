import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumersService } from './costumers.service.js';
import { CreateCostumerDto } from './dto/create-costumer.dto.js';
import { UpdateCostumerDto } from './dto/update-costumer.dto.js';

@Controller('costumers')
export class CostumersController {
  constructor(private readonly costumersService: CostumersService) {}

  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto) {
    return this.costumersService.create(createCostumerDto);
  }

  @Get()
  findAll() {
    return this.costumersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumerDto: UpdateCostumerDto) {
    return this.costumersService.update(+id, updateCostumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumersService.remove(+id);
  }
}
