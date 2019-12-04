import { Action, createAction, props, union } from '@ngrx/store';

import { User } from '../../models/user.class';

export const LogIn = createAction('[Auth] Login', props<{ username: string, password: string }>());
export const LogInSuccess = createAction('[Auth] Login Success', (payload: any) => ({ payload }));
export const LogInFailure = createAction('[Auth] Login Failure', (payload: any) => ({ payload }));
export const LogOut = createAction('[Auth] Logout');
export const GetProfile = createAction('[Auth] GetProfile');
export const GetProfileSuccess = createAction('[Auth] GetProfile Success', (payload: User) => ({ payload }));
export const GetProfileFailure = createAction('[Auth] GetProfile Failure', (payload: string) => ({ payload }));

const actions = union({
  LogInSuccess,
  LogInFailure,
  LogOut,
  GetProfile,
  GetProfileSuccess,
  GetProfileFailure,
});

export type AuthActionTypes = typeof actions;
