import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { FilterComponent } from '../shared/filter/filter.component'
import { PostsIndexComponent } from './posts-index.component';
import { PostDetailComponent } from './post-details/post-detail.component'
import {PostsRoutingModule} from './posts-routing.module'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [PostsIndexComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule, ReactiveFormsModule, RouterModule,
    SharedModule    
  ]
})
export class PostsModule { }
