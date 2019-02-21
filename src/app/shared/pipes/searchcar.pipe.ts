import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'searchcar',
  pure: false
})
export class SearchCarPipe implements PipeTransform {

  transform(items: Car[], searchText?: string): Car[] {
    if (!items) {
      return [];
    }

    searchText = searchText.toLowerCase();

    return items.filter(d => {
      return d.brand.toLowerCase().includes(searchText);
    });
  }
}
