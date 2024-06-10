import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { loadData, loadDataSuccess, loadDataError } from './todos.actions';
import { ITodo } from '../models/todo';
import {State} from './todos.reducer'

const featureState = createFeatureSelector<State>('todos');
export const getDataSelector = createSelector(featureState, (state) => state.data);