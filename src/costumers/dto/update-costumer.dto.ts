import { PartialType } from '@nestjs/mapped-types';
import { CreateCostumerDto } from './create-costumer.dto.js';

export class UpdateCostumerDto extends PartialType(CreateCostumerDto) {}
