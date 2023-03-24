import jwt from 'jsonwebtoken';

type Input = { id: number, email: string };

class GenerateToken {
  public static execute(input: Input): string {
    return jwt.sign(input, 'jwtkey');
  }
}

export default GenerateToken;