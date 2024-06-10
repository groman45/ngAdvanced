import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsIndexComponent } from './posts-index.component';
import { PostDetailComponent } from './post-details/post-detail.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PostsIndexComponent },
      { path: ':id', component: PostDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }