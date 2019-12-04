import * as auth from '../reducer/auth.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  auth: auth.State;
}

export const reducers = {
  auth: auth.authReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');