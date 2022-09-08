import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  counter! : number

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('count').subscribe( state => {
      this.counter = state
    })

  }

  reset(){
    // this.counter = 0
    // this.counterChange.emit(this.counter)
    this.store.dispatch( reset() )
  }

}
