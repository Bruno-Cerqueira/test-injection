import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { decrement, increment, reset } from '../../counter/counter.actions';
import { ICounter } from '../../counter/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<ICounter | undefined>;
 
  constructor(private store: Store<{ count: ICounter[] }>) {
    this.count$ = store.select('count').pipe(map(count => {
      return count.find(counter => counter.id === 0)
    }));
  }
 
  increment() {
    this.store.dispatch(increment({ counterId: 0 }));
  }
 
  decrement() {
    this.store.dispatch(decrement({ counterId: 0 }));
  }
 
  reset() {
    this.store.dispatch(reset({ counterId: 0 }));
  }
}
