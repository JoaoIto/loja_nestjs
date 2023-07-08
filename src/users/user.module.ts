import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { EmailConstraintValidator } from './validation/emailConstraint.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, EmailConstraintValidator],
})
export class UserModule {}
