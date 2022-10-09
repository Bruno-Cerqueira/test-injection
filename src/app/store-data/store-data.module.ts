import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { counterReducer } from './counter/counter.reducer';
import { StoreModule } from '@ngrx/store';

const countFeatureKey = 'count';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(countFeatureKey, counterReducer)
  ]
})
export class StoreDataModule { }
