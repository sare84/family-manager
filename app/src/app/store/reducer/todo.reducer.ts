
import { createReducer, Action, on } from '@ngrx/store';
import { Todo } from '../../models/todo.class';
import { LoadList, LoadListSuccess, LoadListFailure } from '../actions/todo.action';

export interface TodoState {
  loading: Boolean;
  error: String;
  todoList: Array<Todo>;
  tagList: Array<String>;
}

export const initialState: TodoState = {
  loading: false,
  error: '',
  todoList: [],
  tagList: [],
};

const todoReducer = createReducer(
  initialState,
  on(LoadList, (state) => ({
    ...state,
    error: '',
    loading:true,
  })),
  on(LoadListSuccess, (state, { list }) => ({
    ...state,
    error: '',
    loading:false,
    todoList: list,
  })),
  on(LoadListFailure, (state, { error }) => ({
    ...state,
    loading:false,
    error,
  })),
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}