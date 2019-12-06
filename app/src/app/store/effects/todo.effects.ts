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

import { AppState } from '../state/app.state';

@Injectable()
export class TodoEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private store: Store<AppState>,
  ) { }
}