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
    return counterManipulation(state, counterId, addValue)
  }),
  on(decrement, (state, { counterId }) =>  {
    return counterManipulation(state, counterId, restValue)
  }),
  on(reset, (state, { counterId }) =>  {
    return counterManipulation(state, counterId, resetValue)
  })
);

const resetValue = (counter: ICounter) => {
  counter.value = 0;
}

const restValue = (counter: ICounter) => {
  counter.value-= 1;
}


const addValue = (counter: ICounter) => {
  counter.value+= 1;
}

const counterManipulation = (state: ICounter[], counterId: number, counterManipulation: Function) => {
  return state.map(counter => {
    const newCounter = {...counter}
    if(newCounter.id == counterId) {
      counterManipulation(newCounter)
    } 
    return newCounter
  })
}