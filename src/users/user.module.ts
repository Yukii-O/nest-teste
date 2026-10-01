import { Module } from '@nestjs/common';
import { UserService } from './user.service.js'
import { UserRepository } from './user.repository.js';
import { TesteRepository } from './teste.repository.js'

@Module({
  providers: [UserService, UserRepository, TesteRepository]
})
export class UserModule {}