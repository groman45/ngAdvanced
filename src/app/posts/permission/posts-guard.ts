
import { PostsPermissionsService } from  './posts-permissions.service'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PostsGuard  {
    constructor(
        private postsPermissionsService: PostsPermissionsService ){}

     canActivate(): boolean {
        return this.postsPermissionsService.AllowPostsRoute;
    }
    
}
