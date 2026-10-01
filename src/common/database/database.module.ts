import { Module, DynamicModule, Provider } from '@nestjs/common'


export class MockRepository {
  constructor(private readonly entity: any[]) {}

  save(instance: any) {}

  findAll(): any[] {
    return []
  }
}

//Provider = services, repositories, queryhandler (estrutura cqrs padrao), useCase ... 
//em casos de DRY forte conceitualmente entre modulos distintos, é bom criar um package common e fazer uma abstração generica
function createDatabaseProviders (entities: any[]): Provider[] {
  return entities.map( entity => {
    return {
      provide: `${entity.name.toUpperCase()}_REPOSITORY`,
      useValue: new MockRepository(entity) //passou a classe, nao instancia. pra poder usar generics <Repository<Costumer>> depois. algo assim
    }
  })
  }

@Module({})
export class DatabaseModule {
  static forFeature(entities = []/*Costumers, Payments, Reservations*/): DynamicModule {
    const providers = createDatabaseProviders (entities)
    return {
      module: DatabaseModule,
      providers,
      exports: providers,
    }
  }
}