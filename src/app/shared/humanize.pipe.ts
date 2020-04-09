import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  transform(value: string) {
    if (value === '') {
      return value;
    }

    value = value
      .toLowerCase()
      .replace(/[_-]+/g, ' ').replace(/\s{2,}/g, ' ')
      .trim();
    value = value.charAt(0).toUpperCase() + value.slice(1);

    return value;
  }

}
