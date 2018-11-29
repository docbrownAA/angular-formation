import {Injectable} from '@angular/core';
import {Product} from '../../class/product';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root' //depuis angular 6
})
export class ProductService {

  static KEY = 'products';

  products: Array<Product> = [];


  constructor() {
  }

  public findAll(): Array<Product> {
    const data = localStorage.getItem(ProductService.KEY);
    this.products = [];
    if (data != null && !isUndefined(data)) {
      for (const item of JSON.parse(data)) {
        this.products.push(new Product(item._name, item._price, item._id));
      }
    }
    return this.products;
  }

  public add(product: Product): void {
    this.products.push(product);
    this.save();
  }

  public update(product: Product) {
    this.products[this.products.findIndex(p => p.id === product.id)] = product;
    this.save();
  }

  public delete(product: Product) {
    this.products.splice(this.products.findIndex(p => p.id === product.id), 1);
    this.save();
  }

  private save(): void {
    localStorage.setItem(ProductService.KEY, JSON.stringify(this.products));
  }
}
