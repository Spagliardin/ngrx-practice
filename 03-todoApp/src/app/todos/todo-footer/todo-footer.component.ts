import { setFilter, ValidFilters } from './../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducer';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: ValidFilters = 'all';
  filters: ValidFilters[] = ['all', 'completed', 'pending']
  pendings: number = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filter').subscribe( res => {
    //   this.currentFilter = res
    // })

    this.store.subscribe(res => {
      this.currentFilter = res.filter
      this.pendings = res.todos.filter( todo => !todo.completed).length
    })

  }

  changeFilter( filter: ValidFilters ){
    this.store.dispatch(setFilter({
      filter
    }))
  }

  clear(){
    this.store.dispatch(clearCompleted())
  }

}
