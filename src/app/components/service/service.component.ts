import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../class/product';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  name: FormControl;
  price: FormControl;

  form: FormGroup;

  products: Product[];
  product: Product;
  selected: boolean;
  btn: string;

  constructor(private productService: ProductService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.init();
    this.products = this.productService.findAll();

    this.name = new FormControl(null, [Validators.required]);
    this.price = new FormControl(null, [Validators.required, Validators.pattern('[0-9]+(\\.[0-9]+)?')]);
    this.form = this.fb.group(
      {
        name: this.name,
        price: this.price
      });
  }

  private init() {
    this.product = new Product();
    this.btn = 'Ajouter';
    this.selected = false;
  }

  public resetForm() {
    this.form.reset();
    this.init();
  }

  public addProduct() {
    this.product.name = this.name.value;
    this.product.price = this.price.value;
    //debugger;
    const prod = this.products.find(p => p.id === this.product.id);
    if (!prod) {
      if (this.products.length > 0) {

        this.product.id = this.products[this.products.length - 1].id + 1;
      } else {
        this.product.id = 0;
      }
      this.productService.add(this.product);
    } else {

      prod.name = this.product.name;
      prod.price = this.product.price;
      this.productService.update(prod);
    }


    this.btn = 'Ajouter';

    this.product = new Product();
    this.resetForm();
  }

  public edit(produit: Product) {
    this.product = produit;
    this.name.setValue(produit.name);
    this.price.setValue(produit.price);
    this.btn = 'Modifier';
    this.selected = true;
  }

  public cancel() {
    this.form.reset();
    this.selected = false;
  }

  public delete(product: Product){
    this.productService.delete(product);

  }


}
