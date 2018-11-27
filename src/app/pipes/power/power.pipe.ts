import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exposant: number, multi?: number): number {
  if (multi != null) {
    return Math.pow(value, exposant) * multi;
  }
    return Math.pow(value, exposant);
  }

}
