import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavBarComponent} from './nav-bar/nav-bar.component'
import {FilterComponent} from './filter/filter.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavBarComponent, FilterComponent],
  imports: [
    CommonModule, RouterModule, FormsModule,  ReactiveFormsModule
  ],
  exports: [NavBarComponent, FilterComponent]
})
export class SharedModule { }
