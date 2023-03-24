import Email from "./Email";
import bcrypt from "bcryptjs";

class User {
  private _id?: number;
  private _email: Email;
  private _password: string;

  constructor(email: string, password: string, id?: number) {
    this._id = id;
    this._email = new Email(email);
    this._password = this.hashPassword(password);
  }

  get id(): number | undefined {
    return this._id;
  }

  get email(): string {
    return this._email.value;
  }

  get password(): string {
    return this._password;
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  public comparePassword(password: string): boolean {
    return bcrypt.compareSync(password, this._password);
  }
}

export default User;