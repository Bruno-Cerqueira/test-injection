import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { counterReducer } from './counter/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';

const countFeatureKey = 'count';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    StoreModule.forFeature(countFeatureKey, counterReducer),
    CommonModule
  ],
  exports: [
    CounterComponent
  ]
})
export class StoreDataModule { }
