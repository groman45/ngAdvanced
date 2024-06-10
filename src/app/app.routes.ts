import { Routes, mapToCanActivate } from '@angular/router';
//import {PostsComponent} from './posts/posts.component'
import {PostDetailComponent} from './posts/post-details/post-detail.component'
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './not-found/not-found.component';
import {PostsGuard} from './posts/permission/posts-guard'

export const routes: Routes = [ 
    {path: '', component: HomeComponent},
    {
        path: 'posts',        
        loadChildren: () =>
            import('./posts/posts.module').then(
                (mod) => mod.PostsModule
            ),           
    },

    // For standalone components
    /*
    {
        path: 'posts', 
        canActivate: mapToCanActivate([PostsGuard]),
        canActivateChild: mapToCanActivate([PostsGuard]),
        loadComponent: () =>
            import('./posts/posts.component').then(
                (mod) => mod.PostsComponent
            ),           
    },
    {   path: 'posts/:id', 
        canActivate: mapToCanActivate([PostsGuard]), 
        loadComponent: () =>
        import('./posts/post-details/post-detail.component').then(
             (mod) => mod.PostDetailComponent
        )        
    }, */
    { path: '**', pathMatch: 'full', component: NotFoundComponent }
];
