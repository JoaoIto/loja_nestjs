# `user.module.ts`:

Quando criamos um módulo é para basicamente entendermos que precisamos de um arquivo padrão para que identifiquemos todos os arquivos de tipos referentes a um modelo, como uma árvore, e o módulo dela seria o arquivo de controle principal.

Para isso, já que teremos de usuários, criamos para que termos melhor controle disso...

```ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}

```

---