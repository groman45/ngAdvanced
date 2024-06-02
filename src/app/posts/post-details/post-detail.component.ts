import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterModule} from '@angular/router';
import { PostsService } from '../posts.service';
import { filter, from, map, Observable, Subscription, tap, mergeMap, take } from "rxjs";
import { IPost } from '../models/post';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent implements OnInit{
    post: IPost | undefined;

    constructor(private activateRoute: ActivatedRoute,
      private postsService: PostsService
    ){}

    ngOnInit() {
      let id = +this.activateRoute.snapshot.paramMap.get('id')!;     
      this.getData(id);
    }

    getData(id:number) {
        this.postsService.getPosts().pipe(
          map(items => items.filter(i => i.id == id)), take(1))
          .subscribe({
            next: (posts: IPost[]) => { if(posts.length > 0) this.post = posts[0]; },
            error: (e) => { console.error(e); }
          });
    }

}
