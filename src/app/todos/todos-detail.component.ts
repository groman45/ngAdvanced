import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, from, map, Observable, Subscription, tap, mergeMap, take } from "rxjs";
import { TodosService } from './todos.service';
import { ITodo } from './models/todo';

@Component({
  selector: 'app-todos-detail', 
  templateUrl: './todos-detail.component.html',
  styleUrl: './todos-detail.component.scss'
})
export class TodosDetailComponent  implements OnInit {

  todo$: Observable<ITodo> | undefined;

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')!;    
    this.todo$ = this.todosService.getTodo(id);
  }
}
