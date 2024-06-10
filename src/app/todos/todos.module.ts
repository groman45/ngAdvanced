import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TodosRoutingModule} from './todos-routing.module'
import {TodosIndexComponent} from './todos-index.component'
import {TodosDetailComponent} from './todos-detail.component'

@NgModule({
  declarations: [TodosIndexComponent, TodosDetailComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,       
  ],
  
})
export class TodosModule { }
