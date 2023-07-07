export class UserRepository {
  private users = [];

  async save(users) {
    this.users.push(users);
    console.log(`A new user in arr! Users: ${JSON.stringify(this.users)}`);
  }
}
