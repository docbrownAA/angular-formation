import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <header>
      <h2 class="text-center">404 - Not found</h2>
    </header>
    <p class="lead text-warning text-center">Il semble que la page que vous recherchez n'existe pas</p>
    <p class="text-center">
      <a routerLink="/home">Revenir à l'acceuil</a>
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
