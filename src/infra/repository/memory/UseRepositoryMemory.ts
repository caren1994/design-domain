import User from "../../../domain/entities/User";
import UserRepository from "../../../domain/repository/UserRepository";

class UserRepositoryMemory implements UserRepository {
  
  private _users: User[] = [];
  
  async create(user: User): Promise<void> {
    this._users.push(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this._users.find((user) => user.email === email);
  }
}

export default UserRepositoryMemory;