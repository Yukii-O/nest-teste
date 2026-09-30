import { User } from './user.entity.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  findAll(): User[] {
    return [{
      id: 1,
      name: 'Alisson',
    }]
  }
}