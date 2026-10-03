import { z } from 'zod';

export const createPaymentSchema = z.object({
  amount: z.coerce.number().positive().int(),
  currency: z.string().min(3).max(3),
  paymentMethod: z.enum(['paypal', 'card', 'bank_transfer']),

})