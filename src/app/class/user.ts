export class User {

  address: {
    city: string,
    street: string,
    suite: string,
    zipcode: string
  };

  constructor(user: Object) {
    Object.assign(this, user);
  }

  public getAdresse(): string {
    return `${this.address.suite} ${this.address.street} ${this.address.zipcode} ${this.address.city}`;
  }
}
