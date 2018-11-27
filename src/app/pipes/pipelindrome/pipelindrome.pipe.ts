import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelindrome'
})
export class PipelindromePipe implements PipeTransform {

  transform(value: string ): string {
    const transform = value.split('');
    const ret = [];
    for (let i = transform.length; i >= 0; i--) {
      ret.push(transform[i]);
    }
    return ret.join('');
  }

}
