import { Component, OnInit } from '@angular/core';
import {allowPreviousPlayerStylesMerge} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  name = 'Gaël';
  product = {name : 'Pomme', price: 12.90};
  html = '<strong>Je suis dangereux! </strong>';
  message = null;
  users = ['Antoine', 'Damien', 'Gaël', 'Yohann', 'Séverine', 'Audrey', 'Alexis', 'Tristant', 'Lam', 'Jean Marc'];
  constructor() { }

  ngOnInit() {
  }

  public uppercase(text: string): string {
    return text.toUpperCase();
  }

  public clicked(e: any): void {
    alert('Bravo');

  }

  public confirmation(event: MouseEvent): void {
    event.preventDefault();
    console.log(confirm('Êtes vous sûr ?'));
  }

  public showMessage(): void {
    console.log(this.message);
  }

  public focusBlur(chaine: string): void {
   console.log(chaine);
  }

}
