import * as auth from '../reducer/auth.reducer';
import * as todo from '../reducer/todo.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  auth: auth.AuthState;
  todo: todo.TodoState;
}

export const reducers = {
  auth: auth.reducer,
  todo: todo.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectTodoState = createFeatureSelector<AppState>('todo');