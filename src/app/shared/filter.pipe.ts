import { Pipe, PipeTransform } from '@angular/core';
import { Good } from '@models';

@Pipe({name:'filterOnString'})
export class FilterPipe implements PipeTransform {
    transform(list : Good[], filterString: string){
      if (!filterString) {
        return list;
      }
      return list.filter(good => {
          return good.name.toLocaleLowerCase().includes(filterString.toLocaleLowerCase());
      });
    }
}
