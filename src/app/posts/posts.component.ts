import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service'
import { IPost } from './models/post';
import { filter, from, map, Observable, Subscription, tap} from "rxjs";
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule,   ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit, OnDestroy {
  
  public searchControl: FormControl = new FormControl(''); // Filter
  posts: IPost[] | undefined;
  subscription: Subscription| undefined;  

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {   
    this.getDataFromService('');      
    this.searchControl.valueChanges
            .subscribe(query => {                
              this.getDataFromService(query);
        });
    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();     
  }

  getDataFromService(srcTxt: string) {
    //this.postsService.getPosts().subscribe({
    //  next: (posts: IPost[]) => { this.posts = posts; },
    //  error: (e) => { console.error(e); }
   // });

    this.subscription?.unsubscribe();
    this.subscription = this.postsService.getPosts().pipe(
      map(items => items.filter(i => srcTxt == "" || i.id.toString() == srcTxt || i.title.includes(srcTxt) || i.body.includes(srcTxt))))
      .subscribe({
        next: (posts: IPost[]) => { this.posts = posts; },
        error: (e) => { console.error(e); }
      });        
  }

 

} 
