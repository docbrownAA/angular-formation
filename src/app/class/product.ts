export class Product {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private _name: string;
  private _price: number;
  private _id: number;


  constructor(name?: string, price?: number, id?: number) {
    this._name = name;
    this._price = price;
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  public toString(): string {
    return `Product[name= ${this.name}; price= ${this.price}] `;
  }
}
