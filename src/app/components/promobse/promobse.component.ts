import {Component, OnInit} from '@angular/core';
import {PromobseService} from '../../services/promobse/promobse.service';
import {combineAll} from 'rxjs/operators';

@Component({
  selector: 'app-promobse',
  templateUrl: './promobse.component.html',
  styleUrls: ['./promobse.component.css']
})
export class PromobseComponent implements OnInit {

  numbers: number[] = [];
  duration: number;
  error: string;
  wait: string;
  obsNumbers: number[];
  message: string;
  resSomme: number;
  num1: number;
  num2: number;

  constructor(private promobseService: PromobseService) {
  }

  ngOnInit() {
    this.duration = 0;
  }

  public getAsyncNumber(): void {
    this.numbers = [];
    this.error = null;
    this.wait = 'Synchronisation en cours ...';
    this.duration = 0;

    this.promobseService.getPromiseNumber().then((numbers: number[]) => {
      this.numbers = numbers;
      this.wait = null;
      this.error = null;
    }).catch(
      (error: string) => {
        this.error = error;
        this.wait = null;
      }
    );

  }

  public getAsyncNumberAndRandTime(): void {
    this.numbers = [];
    this.error = null;
    this.wait = 'Synchronisation en cours ...';

    this.promobseService.getPromiseNumberAndRandTime().then((data: [number[], number]) => {
      this.numbers = data[0];
      this.duration = data[1];
      this.wait = null;
    }).catch(
      (error: string) => {
        this.error = error;
        this.wait = null;
      }
    );

  }

  public getMutliNumber(): void {
    this.obsNumbers = [];
    this.message = null;
    /*this.promobseService.getObservableNumber().subscribe((numbers: number[]) => {
      this.obsNumbers = numbers;
    }, () => {
    }, () => {
      this.message = 'Synchronisation terminée !';
    });*/

    this.promobseService.getObservableNumber().subscribe(
      next => this.obsNumbers = next,
      null,
      () => {
        this.message = 'complete !';
      });
  }

  private async monPremierAsync() {
    return 'resultat';
  }

  private async monDeuxiemeAsync() {
    throw new Error('Mon erreur de ouf !!');
  }

  private async adition(a: number, b: number): Promise<number> {

    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(a + b);
      }, 1500);
    });
  }

  public getAsyncFunctionOK() {
    console.log(this.monPremierAsync());
  }

  public getAsyncFunctionKO() {
    console.log(this.monDeuxiemeAsync());
  }

  public async somme() {
    //try{} catch() {}
    this.num1 = await this.adition(1, 2);
    this.resSomme = this.num1;
    this.num2 = await this.adition(5, 6);
    this.resSomme = this.num1 + this.num2;


  }

}
