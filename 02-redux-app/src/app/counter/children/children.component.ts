import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';

import { div, multiply } from '../counter.actions';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {

  counter!: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('count').subscribe( state => {
      this.counter = state
    })

  }

  multiply(){
    // this.counter = this.counter * 2
    // this.changeCounter.emit(this.counter)
    this.store.dispatch( multiply({number: 3}) );
  }

  div(){
    // this.counter = this.counter / 2
    // this.changeCounter.emit(this.counter)
    this.store.dispatch( div({number: 2}) )
  }

}
