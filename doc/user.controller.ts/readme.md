## `user.controller.ts`:

Este é o primeiro arquivo de controller, um arquivo de salvamento em que mandamos na requisição post um objeto base de ***json***, com as informações do usuário.

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