import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayLoad } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpCLient: HttpClient) {

  }

  addPost(postPayLoad: PostPayLoad) {
    return this.httpCLient.post('http://localhost:9090/api/posts', postPayLoad);
  }

  getAllPosts(): Observable<Array<PostPayLoad>>{
    return this.httpCLient.get<Array<PostPayLoad>>("http://localhost:9090/api/posts/all");
  }

  getPost(permaLink: Number):Observable<PostPayLoad>{
    return this.httpCLient.get<PostPayLoad>('http://localhost:9090/api/posts/get/'+permaLink);
  }
 
}
