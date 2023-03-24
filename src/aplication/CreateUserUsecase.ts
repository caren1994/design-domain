import User from "../domain/entities/User";
import UserRepository from "../domain/repository/UserRepository";

type Input = {
  email: string;
  password: string;
}

class CreateUserUsecase {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(input: Input): Promise<void> {
    const user = new User(input.email, input.password);
    await this.repository.create(user);
  }
}


export default CreateUserUsecase;