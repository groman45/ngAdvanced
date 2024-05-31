import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPost } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getPosts() {    
    return this.http.get<IPost[]>(this.baseUrl + 'posts');
  }
}
