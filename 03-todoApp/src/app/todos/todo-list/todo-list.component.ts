import { ValidFilters } from './../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []
  currentFilter!: ValidFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe( todos => {
    //   this.todos = todos
    // })

    this.store.subscribe( states => {
      this.todos = states.todos
      this.currentFilter = states.filter
    })
  }

}
