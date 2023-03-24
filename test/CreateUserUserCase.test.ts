import CreateUserUsecase from "../src/aplication/CreateUserUsecase";
import UserRepositoryMemory from "../src/infra/repository/memory/UseRepositoryMemory";

describe('Testes para CreateUserUsecase', () => {
  const repository = new UserRepositoryMemory();
  const usecase = new CreateUserUsecase(repository);
  it('Deve ser possível criar um usuário com sucesso', async () => {
    await expect(usecase.execute({email: 'teste@teste.com', password: '123123'})).resolves.not.toThrow();
  });

  it('Deve causar um erro ao tentar criar um usuário com email inválido', async () => {
    await expect(usecase.execute({email: 'emailinvalido', password: '123123'})).rejects.toThrowError('Email inválido');
  })
});