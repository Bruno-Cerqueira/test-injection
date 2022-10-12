import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment', props<{ counterId: number }>());
export const decrement = createAction('[Counter Component] Decrement', props<{ counterId: number }>());
export const reset = createAction('[Counter Component] Reset', props<{ counterId: number }>());