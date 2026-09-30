import { User } from './user.entity.js';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository.js';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findAll(): User[] {
    return this.userRepository.findAll();
  }
}