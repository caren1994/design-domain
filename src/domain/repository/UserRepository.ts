import User from "../entities/User";

interface UserRepository {
  create(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}

export default UserRepository;