import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface ICounter {
  id: number,
  userId: number,
  value: number,
}

export const counterReducer = createReducer(
  [{
    id: 0,
    userId: 0,
    value: 0,
  }],
  on(increment, (state, { counterId }) =>  {
    return incrementCounter(state, counterId)
  }),
  on(decrement, (state, { counterId }) =>  {
    return decrementCounter(state, counterId)
  }),
  on(reset, (state, { counterId }) =>  {
    return resetCounter(state, counterId)
  })
);


const incrementCounter = (state: ICounter[], counterId: number) => {
  return state.map(counter => {
    const newCounter = {...counter}
    if(newCounter.id == counterId) {
      newCounter.value+= 1
    } 
    return newCounter
  })
}

const decrementCounter = (state: ICounter[], counterId: number) => {
  return state.map(counter => {
    if(counter.id == counterId) counter.value-= 1
    return counter
  })
}

const resetCounter = (state: ICounter[], counterId: number) => {
  return state.map(counter => {
    if(counter.id == counterId) counter.value = 0
    return counter
  })
}

