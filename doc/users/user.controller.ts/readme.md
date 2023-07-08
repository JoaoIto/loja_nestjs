## `user.controller.ts`:

Este é o primeiro arquivo de controller, um arquivo de salvamento em que mandamos na requisição post um objeto base de ***json***, com as informações do usuário.

O Nest possui outros decorators para capturar dados a partir de uma requisição, inclusive o ***``@Body``*** tem outros usos. 

Se precisarmos, por exemplo, capturar só uma parte de um objeto que foi enviado no body podemos passar o nome da chave desta parte do objeto e o Nest captura apenas este valor.

---

## Base code: 
```ts
import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  private usersRepository = new UserRepository();
  @Post()
  async createUser(@Body() userDate) {
    this.usersRepository.save(userDate);
    return [{ status: 'create user' }, { userDate }];
  }
}

```

---