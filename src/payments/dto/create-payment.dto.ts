export class CreatePaymentDto {
  amount: number;
  currency: string;
  paymentMethod: string; //enum
}
