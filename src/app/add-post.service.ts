import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayLoad } from './add-post/post-payload';
import { URLBackend } from './url';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpCLient: HttpClient) {

  }

  addPost(postPayLoad: PostPayLoad) {
    return this.httpCLient.post(URLBackend.baseURL, postPayLoad);
  }

  getAllPosts(): Observable<Array<PostPayLoad>>{
    return this.httpCLient.get<Array<PostPayLoad>>(URLBackend.baseURL+"/api/posts/all");
  }

  getPost(permaLink: Number):Observable<PostPayLoad>{
    return this.httpCLient.get<PostPayLoad>(URLBackend.baseURL+permaLink);
  }

}
