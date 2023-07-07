# `app.module.ts`

Este é o arquivo principal do projeto, em que sua estrutura é basicamente identificar todos os tipos de decorators que virão a serem utilizados dentro do código, e assim eles serão usados...

Ele chama o módulo que é a base do projeto, e logo depois, ele utiliza ele como principal dentro do projeto, e assim, só precisamos importar os tipos que serão usados, os possíveis ***controllers***, ***models***, etc...

## Estrutura base: 

```ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
```

---
## Chamada no arquivo de main:

É uma convenção que utilizamos, sempre chamar este arquivo dentro de main, já que ele guarda a árvore da estrutura que é utilizada dentro do projeto...

Então assim, quando estamos criando a estrutura base com ***``NestFactory``***, temos a chamada do módulo de App.

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

---