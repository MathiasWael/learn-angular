import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourTime'
})
export class HourTimePipe implements PipeTransform {
  transform(value: string): string {
    const split = value.split(':');
    return split[0] + ':' + split[1];
  }
}
