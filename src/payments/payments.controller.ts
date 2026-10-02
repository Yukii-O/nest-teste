import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service.js';
import { CreatePaymentDto } from './dto/create-payment.dto.js';
import { UpdatePaymentDto } from './dto/update-payment.dto.js';
import { ValidationPipe } from './validations/validation.pipe.js';
import { createPaymentSchema } from './validations/create-payment.schema.js';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
//nota --> com npm i @anatine/zod-nestjs pra helper de zod com classes, muda o export type LoginDto = z.infer<typeof loginSchema>; do meu finder recipe para export class LoginDto extends createZodDto(loginSchema) {} e alterar a pipe para ler a metadata e avaliar la, pode criar uma pipe global, que nao precisa ser escrita em cada @Body(), apenas com um app.useGlobalPipes(new ZodValidationPipe());  no controller todo
  @Post()
  create(@Body(new ValidationPipe(createPaymentSchema)) createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.paymentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe(createPaymentSchema)) updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.paymentsService.remove(id);
  }
}
