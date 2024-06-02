import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsPermissionsService {
  private _AllowPostsRoute: boolean = true;
  get AllowPostsRoute():boolean {
    
    return this._AllowPostsRoute;
  }
  set AllowPostsRoute(value:boolean) {
    this._AllowPostsRoute = value;
  }

  constructor() { }
}
