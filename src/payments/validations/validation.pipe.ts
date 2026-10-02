import { ArgumentMetadata, BadRequestException, PipeTransform, Injectable } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ValidationPipe implements PipeTransform{
  constructor(private readonly schema: z.ZodType) {}
  transform(value: any, metadata: ArgumentMetadata) {
  
    const result = this.schema.safeParse(value);
  
    if (!result.success)
        {
            throw new BadRequestException({
              message: 'Invalited Data',
              erros: z.treeifyError(result.error)
            });
        }
    return result.data;
  }
}