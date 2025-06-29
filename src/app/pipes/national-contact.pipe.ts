import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalPhone',
  standalone: true
})
export class NationalPhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value || value.length !== 10 || isNaN(Number(value))) return value;

    const part1 = value.substring(0, 3);
    const part2 = value.substring(3, 6); 
    const part3 = value.substring(6);    

    return `+91-${part1} ${part2} ${part3}`;
  }
}
