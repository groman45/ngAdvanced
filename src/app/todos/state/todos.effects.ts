import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadData, loadDataSuccess, loadDataError } from './todos.actions';
import { of, switchMap, catchError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {TodosService} from '../todos.service'

@Injectable()
export class TodosEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      switchMap(() =>
        this.todosService.getTodos().pipe(
          map(data => loadDataSuccess({ payload: data })),
          catchError(error => of(loadDataError({ payload: error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}