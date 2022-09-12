import { ValidFilters } from './../filter/filter.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: ValidFilters): Todo[] {
    
    switch (filter) {
      case 'pending':
        return value.filter( todo => !todo.completed )
      case 'completed':
        return value.filter( todo => todo.completed )
      default:
        return value;
    }
  }

}
