import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service'
import { IPost } from './models/post';
import { filter, from, map, Observable, Subscription, tap, mergeMap } from "rxjs";
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../shared/filter/filter.component'
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FilterComponent, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit, OnDestroy {  

  posts: IPost[] | undefined;
  subscription: Subscription | undefined;  

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {   
    this.getDataFromService('', 5);   
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();     
  }

  getDataFromService(srcTxt: string, numberOfItems: number) {   

    this.subscription?.unsubscribe();
    
    let observable$ = this.postsService.getPosts();
    if(srcTxt && srcTxt.length > 0) // Append filter
      observable$ = observable$.pipe(
          map(items => items.filter(i => i.id.toString() == srcTxt 
                || i.title.includes(srcTxt) || i.body.includes(srcTxt)))
              );
    if(numberOfItems > 0)
      observable$ = observable$.pipe(map(items => items.slice(0, numberOfItems)));
    
    this.subscription = observable$
      .subscribe({
        next: (posts: IPost[]) => { this.posts = posts; },
        error: (e) => { console.error(e); }
      });        
  }

 

} 
