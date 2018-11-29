import {Component, OnInit} from '@angular/core';
import {Product} from '../../class/product';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  products: Product[] = [];
  product: Product = new Product();
  btn = 'Ajouter';

  constructor() {
  }

  ngOnInit() {
  }

  ajouterProduit() {

    const prod = this.products.find(p => p.id === this.product.id);
    if (!prod) {
      if (this.products.length > 0) {

        this.product.id = this.products[this.products.length - 1].id + 1;
      } else {
        this.product.id = 0;
      }
      this.products.push(this.product);
    } else {
      prod.name = this.product.name;
      prod.price = this.product.price;
    }

    this.btn = 'Ajouter';

    this.product = new Product();
  }

  reloadProduct(produit: Product) {
    this.product = produit;
    this.btn = 'Modifier';
  }

}
