import { createAction , props} from "@ngrx/store";
import {ITodo} from '../models/todo'

export const loadData = createAction('[Todos Component] loadData');
export const loadDataSuccess = createAction('[Todos Component] loadDataSuccess', props<{ payload: ITodo[] }>() );
export const loadDataError = createAction('[Todos Component] loadDataError', props<{ payload: string }>())