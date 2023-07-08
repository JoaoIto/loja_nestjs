export class UserRepository {
  findAll() {
    throw new Error('Method not implemented.');
  }
  private users = [];

  async save(users) {
    this.users.push(users);
    console.log(`A new user in arr! Users: ${JSON.stringify(this.users)}`);
  }

  async list() {
    return this.users;
  }
}
