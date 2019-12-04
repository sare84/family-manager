import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';

import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, GetProfile, GetProfileSuccess } from '../actions/auth.action';
import { AppState } from '../state/app.state';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  @Effect()
  public LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN))
    .map((action: LogIn) => action.payload)
    .switchMap(payload => {
      return this.authService.login(payload.username, payload.password)
        .map((result) => {
          return new LogInSuccess({ token: result.access_token, username: payload.username });
        })
        .catch((error) => {
          return Observable.of(new LogInFailure({ error }));
        });
    });

  @Effect({ dispatch: false })
  public LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    map((action: LogInSuccess) => action.payload),
    tap(async (payload) => {
      await localStorage.setItem('token', _.get(payload, 'token'));
      await this.store.dispatch(new GetProfile());
      await this.router.navigateByUrl('/');
    }),
  );

  @Effect({ dispatch: false })
  public LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  public GetProfileFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GETPROFILEFAILURE)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  GetProfile: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GETPROFILE))
    .switchMap(() => {
      return this.authService.getProfile()
        .map((result) => {
          return new GetProfileSuccess({ ...result });
        })
        .catch((error) => {
          return Observable.of(new LogInFailure({ error }));
        });
    });

  @Effect({ dispatch: false })
  public GetProfileSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GETPROFILESUCCESS)
  );

}