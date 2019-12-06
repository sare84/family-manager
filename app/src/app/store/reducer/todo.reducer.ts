
import { createReducer, Action, on } from '@ngrx/store';
import { Todo } from '../../models/todo.class';

export interface TodoState {
  todoList: Array<Todo>;
  tagList: Array<String>;
}

export const initialState: TodoState = {
  todoList: [],
  tagList: [],
};

const todoReducer = createReducer(
  initialState,
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}