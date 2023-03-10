import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import {PostsService} from "./services/posts.service";
import { PostListComponent } from './components/post-list/post-list.component';
import {PostsResolver} from "./resolvers/posts.resolver";
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import {SharedModule} from "../shared/shared.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {NewPostComponent} from "./components/new-post/new-post.component";


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MatGridListModule
  ],
  providers:[
    PostsService,
    PostsResolver
  ]
})
export class BlogModule { }
