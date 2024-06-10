import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { loadData } from './state/todos.actions';
import { State } from './state/todos.reducer';
import { Observable, map } from 'rxjs';
import { ITodo } from './models/todo';
import {getDataSelector} from './state/todos.selectors'
import { state } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos-index.component.html',
  styleUrl: './todos-index.component.scss'
})
export class TodosIndexComponent implements OnInit{
  data$: Observable<ITodo[]> | undefined;// = this.store.select(state => state.data);
 

  constructor(private store: Store<State>, private actions$: Actions) {}

  ngOnInit() {   

    this.store.dispatch(loadData());
    this.data$ = this.store.pipe(select(getDataSelector));

    //this.data$ = this.store.pipe(select(state => state));

    /*
    this.store.select(getDataSelector).subscribe({
      next: (todos: ITodo[]) => { console.log(todos); },
      error: (e) => { console.error(e); }
    });  */


   
    //this.data$ = this.store.pipe(select(state => state.data));
    //this.data$ = this.store.pipe(select(getDataSelector));

    //this.store.select(state => state.loading)//.pipe(map(x => x.loading))
    //  .subscribe((state) => console.log(state));

    //this.store.pipe(select(getDataSelector)).subscribe((state) => console.log(state));

 

    //this.store.pipe(map(s => {s.data})).subscribe((state) => console.log(state));

    //this.store.subscribe((state) => console.log(state)); // ++
  }
}
