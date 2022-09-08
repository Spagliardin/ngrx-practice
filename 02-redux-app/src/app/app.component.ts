import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter!: number;

  constructor( private store: Store<AppState> ){

    this.store.select('count').subscribe( state => {
      console.log(state);
      this.counter = state
    })

  }
  
  increment(){
    this.store.dispatch( actions.increment() )
  }

  decrement(){
    this.store.dispatch( actions.decrement() )
  }

}
