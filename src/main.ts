import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { UserService } from './users/user.service.js';
import { UserModule } from './users/user.module.js';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, { snapshot: true }); //a partir da factory o grafo de dependecias dentro do conteiner da inversao de controle
  //app.useGlobalInterceptors(new CacheInterceptor());  //interceptor completamente global
  const userService = app.select(UserModule).get(UserService, { strict: true }); //se tiver UserService especificamente nesse modulo, vai debugar (strict: false procura no resto caso nao ache)
  console.log(userService) //sem injectable em UserService: -> UserService {userRepository: undefined}
  userService.findAll();
}
bootstrap().then();

//nest --help --> nest g <tag> <name>
/*
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module.js';
   //import { CacheInterceptor } from './cache.interceptor.js'; // Importa o seu interceptor

   async function bootstrap() {
     // 1. Usa o .create() em vez de .createApplicationContext() para subir o servidor HTTP
     const app = await NestFactory.create(AppModule, { snapshot: true });
     
     // 2. Agora sim! Ativa o interceptor para absolutamente todas as rotas da sua API
     //app.useGlobalInterceptors(new CacheInterceptor());
     
     // 3. Define a porta onde a API vai escutar as requisições (ex: 3000)
     const PORT = 3000;
     await app.listen(PORT);
     console.log(`🚀 Servidor HTTP rodando em http://localhost:${PORT}`);
   }
   bootstrap().then();*/