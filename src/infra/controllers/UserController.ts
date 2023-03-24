import { Request, Response } from "express";
import CreateUserUsecase from "../../aplication/CreateUserUsecase";
import LoginUsecase from "../../aplication/LoginUsecase";

class UserController {

  private createUserUsecase: CreateUserUsecase;
  private loginUsecase: LoginUsecase;

  constructor(createUserUsecase: CreateUserUsecase, loginUsecase: LoginUsecase) {
    this.createUserUsecase = createUserUsecase;
    this.loginUsecase = loginUsecase;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      await this.createUserUsecase.execute({ email, password });
      return res.status(201).json({ message: 'Usuário criado com sucesso.' });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(422).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Erro não identificado' });
    }
  }


  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const token = await this.loginUsecase.execute({ email, password });
      return res.status(200).json({ token });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(422).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Erro não identificado' });
    }
  }
}

export default UserController;