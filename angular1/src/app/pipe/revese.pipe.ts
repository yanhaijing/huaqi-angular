import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })
export class ReversePipe implements PipeTransform {
  transform(str: string): string {
    return String(str).split('').reverse().join('');
  }
}
