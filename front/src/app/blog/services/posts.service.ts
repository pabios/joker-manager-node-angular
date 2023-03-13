import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {Post} from "../models/posts.models";
import {environment} from "../../../environments/environment";

@Injectable()
export class PostsService{
  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }
  getCategory(): Observable<any> {
    return this.http.get<Post[]>(`${environment.url}/category`);
  }

  addPost(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<Post> {
    return this.getPosts().pipe(
      map(posts => [...posts].sort((a,b) => a.id - b.id)),
      map(sortedPosts => sortedPosts[sortedPosts.length - 1]),
      map(previousPosts => ({
        ...formValue,
        snaps: 0,
        createdDate: new Date(),
        id: previousPosts.id + 1
      })),
      switchMap(newPost => this.http.post<Post>(
        `${environment.apiUrl}/add `,
        newPost)
      )
    );
  }


  ajout(formData:FormData):Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/add`,formData)
  }

}
