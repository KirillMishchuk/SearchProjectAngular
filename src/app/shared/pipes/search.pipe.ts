import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // фильтр по имени
  name : 'search'
})
export class SearchPipe implements PipeTransform {
  transform(list, value) {
    return list.filter(item => {
      return item.title.includes(value)
    })
  }
}
