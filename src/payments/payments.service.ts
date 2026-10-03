import { Injectable, Scope, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto.js';
import { UpdatePaymentDto } from './dto/update-payment.dto.js';
import { Payment } from './entities/payment.entity.js';
////////////////////////////////////////////// feito com IA so pra testar o cache console.log()
@Injectable({ scope: Scope.DEFAULT })
export class PaymentsService {
  // Banco de dados local em memória simulando a entidade
  private payments: Payment[] = [];
  private idCounter = 1;

  create(createPaymentDto: CreatePaymentDto): Payment {
    const newPayment: Payment = {
      id: this.idCounter++,
      amount: createPaymentDto.amount,
      currency: createPaymentDto.currency,
      paymentMethod: createPaymentDto.paymentMethod,
    };

    this.payments.push(newPayment);
    return newPayment;
  }

  findAll(): Payment[] {
    return this.payments;
  }

  findOne(id: number): Payment {
    return {}
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto): Payment {
    const payment = this.findOne(id); // Já dispara NotFoundException se não existir
    
    // Mescla as alterações do DTO no objeto local
    Object.assign(payment, updatePaymentDto);
    
    return payment;
  }

  remove(id: number): Payment {
    return {}
    
  }
}
