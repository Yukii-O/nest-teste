import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module.js';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    UserModule, 
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production'
    }),
  ],
  providers: []
})
export class AppModule {}