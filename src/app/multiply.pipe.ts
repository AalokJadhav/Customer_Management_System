import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, value2: number, symbol: string): string  {

    const result = value * value2;
    return symbol + result;
  }

}
