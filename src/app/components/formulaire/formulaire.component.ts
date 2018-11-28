import { Component, OnInit } from '@angular/core';
import {Product} from '../../class/product';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  products: Product[] = [];
  product: Product = new Product();
  constructor() { }

  ngOnInit() {
  }

  ajouterProduit(){
    this.products.push(this.product);
    this.product = new Product();
  }

}
