import User from "../src/domain/entities/User";

describe('Testes para Entidade User', () => {
  it('Deve ser possível criar uma instância de User', () => {
    const user = new User('email@teste.com', '123123');
    expect(user).toBeInstanceOf(User);
  });

  it('Deve causar um erro ao tentar criar um usuário com email no formato inválido', () => {
    expect(() => new User('emailerrado', '234234')).toThrowError('Email inválido');
  });

  it('Deve fazer o hash da senha ao criar um usuário', () => {
    const user = new User('email@teste.com', '123123');
    expect(user.password).not.toEqual('123123');
  });

  it('Deve comparar a senha e resultado verdadeiro', () => {
    const user = new User('email@teste.com', '123123');
    expect(user.comparePassword('123123')).toBeTruthy();
  });

  it('Deve comparar a senha e resultado falso ', () => {
    const user = new User('email@teste.com', '123123');
    expect(user.comparePassword('9879584654')).toBeFalsy();
  });
});