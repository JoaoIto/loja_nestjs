# Oque é um DTO?

DTO significa Data Transfer Object, que é um padrão de projeto utilizado para transferir dados entre diferentes camadas de uma aplicação. O DTO é uma classe que define a estrutura dos dados que serão transferidos, geralmente entre o cliente (front-end) e o servidor (back-end).

O objetivo principal do DTO **é encapsular os dados em um objeto estruturado e simples de ser transmitido.** Ele contém **apenas os campos necessários para a operação em questão**, permitindo um transporte eficiente e uma representação clara dos dados.

---

## DTO Users

Bom, fiz a validação por meio do dto de user, na qual chamei ele e botei os dados necessários, usando a importação do pacote instalado de *** ``class-validator``***, e assim vamos passar todos os argumentos, com suas mensagenes de erros.

## Base code:

```ts
import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio!' })
  nome: string;

  @IsEmail(undefined, {
    message:
      'O email é inválido! Verifique se esqueceu alguma informação ou ocorreu erro de digitação!',
  })
  @IsNotEmpty({
    message: 'O email não pode estar vazio!',
  })
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres!' })
  @IsNotEmpty({
    message: 'a senha não pode estar vazia!',
  })
  senha: string;
}

```

---


## DTO Imports:

1. Primeiro, adicione a importação do CreateUserDTO no arquivo user.controller.ts:

```ts
import { CreateUserDTO } from './dto/create-user.dto';
```

Certifique-se de que o caminho da importação está correto, de acordo com a estrutura de diretórios do seu projeto.

2. No mesmo arquivo user.controller.ts, modifique o método createUser() para usar o CreateUserDTO:

```ts
@Post()
async createUser(@Body() createUserDto: CreateUserDTO) {
  // Seu código para criar o usuário com base no createUserDto
}
```

Agora, o método createUser() receberá o createUserDto como parâmetro e utilizará a estrutura definida no DTO para validar os dados recebidos.

3. No arquivo user.service.ts, adicione a importação do CreateUserDTO:

```ts
import { CreateUserDTO } from './dto/create-user.dto';
```

4. No método createUser() do UserService no arquivo user.service.ts, modifique o parâmetro para receber o CreateUserDTO:


```ts
async createUser(createUserDto: CreateUserDTO) {
  // Seu código para criar o usuário com base no createUserDto
}

```

Agora, o método createUser() receberá o createUserDto como parâmetro do tipo CreateUserDTO.

5. No arquivo user.repository.ts, adicione a importação do CreateUserDTO:


```ts
import { CreateUserDTO } from './dto/create-user.dto';
```

6. No método save() do UserRepository no arquivo user.repository.ts, modifique o parâmetro para receber o CreateUserDTO:


```ts
async save(createUserDto: CreateUserDTO) {
  // Seu código para salvar o usuário com base no createUserDto
}
```

Agora, o método save() receberá o createUserDto como parâmetro do tipo CreateUserDTO.

Após fazer essas modificações, o CreateUserDTO será usado em toda a cadeia de execução, desde o controlador até o repositório, permitindo a validação dos dados de acordo com as regras definidas no DTO.

---