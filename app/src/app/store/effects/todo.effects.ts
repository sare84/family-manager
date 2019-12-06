import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType, createEffect, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { AppState } from '../state/app.state';
import { TodoService } from '../../services/todo.service';
import { LoadList, LoadListSuccess, LoadListFailure } from '../actions/todo.action';
import * as TodoActionTypes from '../actions/todo.action';

@Injectable()
export class TodoEffects {
  constructor(
    private actions: Actions,
    private todoService: TodoService,
  ) { }

  init$ = createEffect(() =>
    this.actions.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() =>  { return TodoActionTypes.LoadList() })
    )
  );

  getTodoList$ = createEffect(() => this.actions.pipe(
    ofType(LoadList))
    .switchMap(() => {
      return this.todoService.getList()
        .map((result) => {
          return TodoActionTypes.LoadListSuccess({ list: result });
        })
        .catch((error) => {
          return Observable.of(TodoActionTypes.LoadListFailure({ error }));
        });
    })
  );

  loadListSuccess$ = createEffect(() => this.actions.pipe(
    ofType(LoadListSuccess)
  ), { dispatch: false });

  loadListFailure$ = createEffect(() => this.actions.pipe(
    ofType(LoadListFailure)
  ), { dispatch: false });
}