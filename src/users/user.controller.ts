import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private usersRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userDate) {
    this.usersRepository.save(userDate);
    return [{ status: 'create user' }, { userDate }];
  }

  @Get()
  async listUsers() {
    return this.usersRepository.list();
  }
}
