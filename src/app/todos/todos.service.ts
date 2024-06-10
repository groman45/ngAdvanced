import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITodo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getTodos() {    
    return this.http.get<ITodo[]>(this.baseUrl + 'todos');
  }

  getTodo(id:number) {    
    return this.http.get<ITodo>(this.baseUrl + 'todos/' + id);
  }
}
