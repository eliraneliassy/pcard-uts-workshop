import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, args: number): number {
    if (value && value > 400) {
      return value * (1 - args);
    }
    
    return value;
  }

}
