import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
})
export class DayPipe implements PipeTransform {

  transform(value: string): string | null {
    const now = new Date();
    const date = new Date(value);

    if (date.toDateString() === now.toDateString()) {
      return 'Today';
    }

    now.setDate(now.getDate() + 1);
    if (date.toDateString() === now.toDateString()) {
      return 'Tomorrow';
    }

    return formatDate(value, 'EEEE', 'en-US');
  }
}
