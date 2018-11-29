import {Injectable} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromobseService {
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  public getPromiseNumber(): Promise<Number[]> {

    const randError = Math.floor(Math.random() * 3 + 1);
    const randTime = Math.floor(Math.random() * 5000 + 1000);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randError > 1) {
          resolve(this.numbers);
        } else {
          reject('Serveur indisponible pour le moment ...');
        }
      }, randTime);
    });
  }

  public getPromiseNumberAndRandTime(): Promise<[number[], number]> {

    const randError = Math.floor(Math.random() * 3 + 1);
    const randTime = Math.floor(Math.random() * 5000 + 1000);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randError > 1) {
          resolve([this.numbers, randTime]);
        } else {
          reject('Serveur indisponible pour le moment ...');
        }
      }, randTime);
    });
  }

  public getObservableNumber(): Observable<number[]> {

    // next(), error(), complete()
    return Observable.create((subcriber: Subscriber<number[]>) => {
      subcriber.next(this.numbers);
      setTimeout(() => {
        subcriber.next(this.numbers.map(number => number + 10));
      }, 2000);

      setTimeout(() => {
        subcriber.next(this.numbers.map(number => (number + 10) * 10));
        subcriber.complete();
      }, 4000);
    });
  }
}
