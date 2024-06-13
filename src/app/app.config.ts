import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import { dataReducer } from './todos/state/todos.reducer';
import { TodosEffects } from './todos/state/todos.effects';
import { provideClientHydration } from '@angular/platform-browser';
import {  withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()),
    provideStore({todos: dataReducer}), provideEffects([TodosEffects]), //, provideState({name:'todos', reducer: dataReducer})

    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }), provideClientHydration()

  ]
};
