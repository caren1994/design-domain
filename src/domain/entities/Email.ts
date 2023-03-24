class Email {
  private _value: string;
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  constructor(value: string) {
    if (!Email.EMAIL_REGEX.test(value)) {
      throw new Error('Email inválido');
    }
    this._value = value;
  }

  get value(): string {
    return this._value;
  }
}

export default Email;