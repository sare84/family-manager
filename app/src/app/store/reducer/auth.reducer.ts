import { User } from '../../models/user.class';
import { LogInSuccess, LogInFailure, GetProfileSuccess, GetProfileFailure, LogOut } from '../actions/auth.action';
import { createReducer, Action, on } from '@ngrx/store';

export interface AuthState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

const authReducer = createReducer(
  initialState,
  on(LogInSuccess, (state, { payload }) => ({
    ...state,
    isAuthenticated: true,
    user: {
      ...state.user,
      token: payload.token,
    },
    errorMessage: null
  })),
  on(LogInFailure, state => ({
    ...state,
    errorMessage: 'Incorrect email and/or password.'
  })),
  on(GetProfileSuccess, (state, { payload }) => ({
    ...state,
    user: {
      ...state.user,
      ...payload,
    },
  })),
  on(GetProfileFailure, state => ({
    ...state,
    errorMessage: 'Profile could not be loaded.'
  })),
  on(LogOut, state => (initialState))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

