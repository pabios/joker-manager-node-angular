import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./components/post-list/post-list.component";
import {PostsResolver} from "./resolvers/posts.resolver";
import {AuthGuard} from "../core/guards/auth.guard";
import {NewPostComponent} from "./components/new-post/new-post.component";

const routes: Routes = [
  {path:'create',component:NewPostComponent}, //,canActivate:[AuthGuard]
  { path: '', component: PostListComponent, resolve: { posts: PostsResolver } } // blog/r
];


// {path:'create',component:NewFaceSnapComponent,canActivate:[AuthGuard]},
// // { path: ':id', component: SingleFaceSnapComponent,canActivate:[AuthGuard] },
// { path: ':id', component: SingleFaceSnapComponent },
// { path: '', component: FaceSnapListComponent },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
