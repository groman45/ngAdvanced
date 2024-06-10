import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosIndexComponent } from './todos-index.component';
import { TodosDetailComponent } from './todos-detail.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TodosIndexComponent },
      { path: ':id', component: TodosDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }