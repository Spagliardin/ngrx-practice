import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Todo } from './../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { deleted, edited, toggle } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputFisic') txtInputFisic!: ElementRef;

  @Input() todo!: Todo

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  edited: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required)

    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch(toggle({id: this.todo.id}))
    })
  }

  editing(){
    this.edited = true

    this.txtInput.setValue(this.todo.text)

    setTimeout(() => {
      this.txtInputFisic.nativeElement.select()
    }, 1);
  }

  finishEdit(){
    this.edited = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }

    this.store.dispatch(
      edited({
        id: this.todo.id,
        text: this.txtInput.value
      })
    )
  }

  deletedTodo(){
    this.store.dispatch(deleted({
      id: this.todo.id
    }))
  }

}
