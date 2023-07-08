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
