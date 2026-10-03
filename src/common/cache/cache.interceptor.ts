import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable, of, tap } from 'rxjs'

@Injectable() //só é realmente necessario caso use Redis mesmo ou algo do tipo, algo pra instanciar aqui. mas pus por boa pratica
export class CacheInterceptor implements NestInterceptor {
  private cache: { [ key: string ]: any } = {  }  //simulação de Redis --> key é o userId, url e metodo http (get, post)

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.method !== 'GET') {
      return next.handle();
    }

    const userId = 1; //pegar do jwt padrao
    const cacheKey = this.generateCacheKey(request, userId);

    if (this.cache[cacheKey]) { //se tiver algo no cache, deu hit. n precisa prosseguir com a regra de negocio do controler
      console.log(`Cache hit for user ${userId}, key: ${cacheKey}`);
      return of(this.cache[cacheKey]);
    }
    console.log(`Cache miss for user ${userId}, key: ${cacheKey}`);

    return next.handle().pipe( //se nao tiver no cache ja, deixa o controller faz seu papel. e guarda esse get que ele consultou no banco, no cache
      tap(( data => { //pega o que o get retorna
        this.cache[cacheKey] = data;
        }),
      )
    );

  }
  private generateCacheKey (request: Request, userId: number) {
    return `${userId}:${request.method}:${request.url}`;
    }
 
}