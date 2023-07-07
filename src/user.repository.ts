export class UserRepository {
  private users = [];

  save(users) {
    this.users.push(users);
  }
}
