import { Action } from '@ngrx/store';
import { User } from '../../models/user.class';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  GETPROFILE = '[Auth] GetProfile',
  GETPROFILESUCCESS = '[Auth] GetProfile Success',
  GETPROFILEFAILURE = '[Auth] GetProfile Failure',
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class GetProfile implements Action {
  readonly type = AuthActionTypes.GETPROFILE;
}

export class GetProfileSuccess implements Action {
  readonly type = AuthActionTypes.GETPROFILESUCCESS;
  constructor(public payload: User) {}
}

export class GetProfileFailure implements Action {
  readonly type = AuthActionTypes.GETPROFILEFAILURE;
  constructor(public payload: string) {}
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | LogOut
  | GetProfile
  | GetProfileSuccess
  | GetProfileFailure
  ;