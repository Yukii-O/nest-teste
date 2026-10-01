import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module.js';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ReservationsModule } from './reservations/reservations.module.js';
import { PaymentsModule } from './payments/payments.module.js';
import { SearchModule } from './search/search.module.js';
import { CostumersModule } from './costumers/costumers.module.js';

@Module({
  imports: [
    UserModule, 
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production'
    }), ReservationsModule, PaymentsModule, SearchModule, CostumersModule,
  ],
  providers: []
})
export class AppModule {}