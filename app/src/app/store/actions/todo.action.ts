import { Action, createAction, props, union } from '@ngrx/store';
import { Todo } from '../../models/todo.class';


export const LoadList = createAction('[Todo] Load List');
export const LoadListSuccess = createAction('[Todo] Load List Success', props<{ list: Array<Todo> }>());
export const LoadListFailure = createAction('[Todo] Load List Failure', props<{ error: String }>());

const actions = union({
  LoadList,
  LoadListSuccess,
  LoadListFailure,
});

export type AuthActionTypes = typeof actions;
