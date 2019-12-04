import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';

import { AuthService } from '../../services/auth.service';
import { LogInSuccess, LogInFailure, GetProfile, GetProfileSuccess, GetProfileFailure, LogOut, LogIn } from '../actions/auth.action';
import * as AuthActionTypes from '../actions/auth.action';

import { AppState } from '../state/app.state';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
  ) { }

  logIn$ = createEffect(
    () => this.actions.pipe(
      ofType(LogIn))
      .switchMap(({ username, password }) => {
        return this.authService.login(username, password)
          .map((result) => {
            return AuthActionTypes.LogInSuccess({ token: result.access_token, username });
          })
          .catch((error) => {
            return Observable.of(AuthActionTypes.LogInFailure({ error }));
          });
      })
  );

  logInSuccess$ = createEffect(() => this.actions.pipe(
    ofType(LogInSuccess),
    tap(async ({ payload }) => {
      this.authService.setToken(_.get(payload, 'token'));
      await this.store.dispatch(AuthActionTypes.GetProfile());
      await this.router.navigateByUrl('/');
    }),
  ), { dispatch: false });

  logOut$ = createEffect(() => this.actions.pipe(
    ofType(LogOut),
    tap((user) => {
      this.authService.deleteToken();
      this.router.navigateByUrl('/login');
    })
  ), { dispatch: false });

  getProfile$ = createEffect(() => this.actions.pipe(
    ofType(GetProfile))
    .switchMap(() => {
      return this.authService.getProfile()
        .map((result) => {
          return AuthActionTypes.GetProfileSuccess({ ...result });
        })
        .catch((error) => {
          return Observable.of(AuthActionTypes.LogInFailure({ error }));
        });
    })
  );

  logInFailure$ = createEffect(() => this.actions.pipe(
    ofType(LogInFailure)
  ), { dispatch: false });

  getProfileFailure$ = createEffect(() => this.actions.pipe(
    ofType(GetProfileFailure)
  ), { dispatch: false });

  getProfileSuccess$ = createEffect(() => this.actions.pipe(
    ofType(GetProfileSuccess)
  ), { dispatch: false });
}