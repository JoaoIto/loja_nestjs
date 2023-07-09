# EmailConstraint Validation: 

A validação de email único utilizando um decorator personalizado foi feita para garantir que o email fornecido ao criar um novo usuário seja único no sistema. 

Essa validação é importante **para evitar a criação de múltiplos usuários com o mesmo email**, o que pode levar a problemas de segurança e integridade dos dados.

A implementação do decorator personalizado IsEmailConstraint **permite que você adicione essa validação de forma fácil e reutilizável nos seus DTOs**. O decorator é aplicado a uma propriedade de email em um DTO, e durante o processo de validação do class-validator, a lógica personalizada é executada para verificar se o email já existe no sistema.

---

Aqui está uma visão geral do funcionamento do decorator personalizado:

1. O decorator IsEmailConstraint é aplicado a uma propriedade de email em um DTO, como por exemplo:

```ts

@IsEmailConstraint({ message: 'O email já está em uso!' })
email: string;
```

2. Durante a validação, o class-validator chama o decorator IsEmailConstraint, que registra o decorator personalizado EmailConstraintValidator como o validador para essa propriedade.

3. O EmailConstraintValidator é responsável por implementar a lógica de validação personalizada para verificar se o email já existe no sistema.

4. No método validate do EmailConstraintValidator, você pode acessar o repositório de usuários para verificar se o email já está cadastrado.

5. O resultado da validação é retornado como true se o email for único (não existir no sistema) e false caso contrário.

Essa abordagem **permite que você mantenha a lógica de validação do email único em um local centralizado** e a utilize em diferentes partes do código **onde for necessário validar a unicidade do email.** Isso promove a reutilização do código, evitando duplicações e tornando mais fácil manter a consistência na validação dos dados.

---

## Code base: 

```ts
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailConstraintValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    _validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const isUserEmail = await this.userRepository.existEmail(value);

    return !isUserEmail;
  }
}

export const IsEmailConstraint = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: EmailConstraintValidator,
    });
  };
};

```

O código acima define um decorator personalizado chamado IsEmailConstraint que valida se um email é único. Aqui está uma explicação passo a passo do que o código faz:

1. O decorator personalizado IsEmailConstraint é criado usando a função registerDecorator fornecida pelo class-validator.

2. O decorator IsEmailConstraint recebe as opções de validação como parâmetro.

3. O registerDecorator associa o decorator personalizado a uma classe, propriedade e validador.

4. O decorator personalizado usa a classe EmailConstraintValidator como validador. Essa classe implementa a interface ValidatorConstraintInterface e contém a lógica de validação personalizada.

5. A classe EmailConstraintValidator é decorada com @ValidatorConstraint({ async: true }) para indicar que a validação é assíncrona.

6. A classe EmailConstraintValidator recebe uma instância de UserRepository no construtor. Isso permite que o validador acesse o repositório de usuário para verificar se o email já existe.

7. O método validate na classe EmailConstraintValidator é implementado para executar a validação personalizada. Ele recebe o valor do email a ser validado e retorna true se o email for único (não existir no banco de dados) e false caso contrário.

8. A função IsEmailConstraint retorna um decorator personalizado que pode ser aplicado a uma propriedade em uma classe DTO.

---


## Import and archives:

Agora, para utilizar esse decorator personalizado, você precisa fazer as seguintes alterações nos arquivos relevantes do seu projeto:

1. No arquivo create-user.dto.ts, importe o decorator ``IsEmailConstraint``:

```ts
import { IsString, IsNotEmpty } from 'class-validator';
import { IsEmailConstraint } from '../path/to/validationemailConstraint.validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  // Use o decorator personalizado para a validação de email único
  @IsEmailConstraint({ message: 'O email já está em uso!' })
  email: string;

  // ...
}

```

Aqui, o decorator IsEmailConstraint é aplicado à propriedade email do DTO.

2. No arquivo ``user.repository.ts``, certifique-se de que você está importando o repositório ``UserRepository``:

```ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../path/to/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  // ...
}

```

Certifique-se de que o caminho da importação do UserRepository está correto, de acordo com a estrutura de diretórios do seu projeto.

3. No arquivo user.repository.ts, adicione o método existEmail() que verifica se o email já existe no banco de dados:

```ts
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../path/to/user.repository';

@Injectable()
export class UserRepository {
  constructor(private userRepository: UserRepository) {}

  async existEmail(email: string): Promise<boolean> {
    // Adicione a lógica aqui para verificar se o email já existe no banco de dados
    // Retorne true se o email existir e false caso contrário
    return false;
  }

  // ...
}

```


Aqui, você precisa implementar a lógica dentro do método existEmail() para verificar se o email já existe no banco de dados. Retorne true se o email existir e false caso contrário.

---