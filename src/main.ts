import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { UserService } from './users/user.service.js';
import { UserModule } from './users/user.module.js';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, { snapshot: true }); //a partir da factory o grafo de dependecias dentro do conteiner da inversao de controle
  const userService = app.select(UserModule).get(UserService, { strict: true }); //se tiver UserService especificamente nesse modulo, vai debugar (strict: false procura no resto caso nao ache)
  userService.findAll();
}
bootstrap().then();
