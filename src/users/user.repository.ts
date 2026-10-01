import { User } from './user.entity.js';
import { TesteRepository } from './teste.repository.js'
import { Injectable } from '@nestjs/common';

@Injectable() //se tirar, funciona o repository, mas nao o teste.repository. pois o pai so pode resolver com gambiarra o problema de instancia dos filhos, que nao têm injectable
export class UserRepository {
  constructor(private readonly testeRepository: TesteRepository) {}
  findAll(): User[]
  { return this.testeRepository.findAll();
  }
}