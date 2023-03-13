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
import {AuthModule} from "../auth/auth.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";


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
    MatGridListModule,
    AuthModule,
    MatDividerModule
  ],
  providers:[
    PostsService,
    PostsResolver
  ]
})
export class BlogModule { }
