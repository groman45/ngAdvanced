import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { loadData, loadDataSuccess, loadDataError } from './todos.actions';
import { ITodo } from '../models/todo';

export interface State {
  data: ITodo[];
  loading: boolean;
  error: any;
}

export const initialState: State = {
  data: [],
  loading: false,
  error: null
};

export const dataReducer = createReducer(
  initialState,
  on(loadData, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(loadDataSuccess, (state, { payload }) => {

    
    return {
      ...state,
      loading: false,
      data: payload
    };
  }),
  on(loadDataError, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      error: payload
    };
  })
);

