import GenerateToken from "../domain/entities/GenerateToken";
import UserRepository from "../domain/repository/UserRepository";

type Input = {
  email: string;
  password: string;
}

class LoginUsecase {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  // Aplicação de regra de negócio.(AplicationService/Usecase)
  // Regra de negócio aplicada em uma Entity (Entidade)
  // Regra de negócio estática,(Domain Service)
  // Chamadao ao repository (comunicação com o banco)
  public async execute(input: Input): Promise<string> {
    const user = await this.repository.findByEmail(input.email);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    if (!user.comparePassword(input.password)) {
      throw new Error('Email ou senha incorretos')
    }

    return GenerateToken.execute({ id: user.id!, email: user.email });
  }

}

export default LoginUsecase;