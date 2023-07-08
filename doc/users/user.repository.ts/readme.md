# `user.repository.ts`:

No Nest.js, o padrão de arquitetura recomendado é o Design Pattern Repository, que separa as responsabilidades do acesso aos dados (persistência) do restante da lógica de negócios. O arquivo de repositório é responsável por fornecer métodos para criar, ler, atualizar e excluir dados do armazenamento.

A criação de um arquivo de repositório separado permite que você isole e abstraia a lógica de persistência de dados em uma camada separada. Isso facilita a substituição do mecanismo de armazenamento subjacente, como banco de dados, sem afetar a lógica de negócios em outros lugares da aplicação.


## Base código: 

```ts
export class UserRepository {
  private users = [];

  async save(users) {
    this.users.push(users);
    console.log(`A new user in arr! Users: ${JSON.stringify(this.users)}`);
  }
}

```
---