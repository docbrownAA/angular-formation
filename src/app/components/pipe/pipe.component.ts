import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  date = new Date();
  object = {nom: 'Doe', prenom: 'John', age: 30, profession: 'Tueur à gage'};
  user = null;
  users = ['Antoine', 'Damien', 'Gaël', 'Yohann', 'Séverine',
    'Audrey', 'Alexis', 'Tristant', 'Lam', 'Jean Marc',
  'Jean', 'Marie', 'Sophie', 'Michel', 'Eleonore'];
  step: number = 5;
  start: number = 0;
  end: number = 5;
  page = 1;
  total: number = Math.ceil(this.users.length / this.step);
  steps = [3, 5, 10];
  constructor() { }

  ngOnInit() {
  }

  public prev() {
    if (this.page > 1) {
      this.page--;
      this.start = this.start - this.step;
      this.end = this.end - this.step;
    }
  }

  public next() {
    if (this.page < this.total ) {
      this.page++;
      this.start = this.start + this.step;
      this.end = this.end + this.step;
    }
  }

  public changeStep() {
    this.step = +this.step;
    this.start = 0;
    this.end = this.start + this.step;
    this.page = 1;
    this.total =  Math.ceil(this.users.length / this.step);
  }
}
