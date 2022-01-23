import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostPayLoad } from './add-post/post-payload';
import { URLBackend } from './url';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  private url = environment.apiUrl;
  constructor(private httpCLient: HttpClient) {

  }

  addPost(postPayLoad: PostPayLoad) {
    return this.httpCLient.post(this.url +"/api/posts", postPayLoad);
  }

  getAllPosts(): Observable<Array<PostPayLoad>>{
    return this.httpCLient.get<Array<PostPayLoad>>(this.url+"/api/posts/all");
  }

  getPost(permaLink: Number):Observable<PostPayLoad>{
    return this.httpCLient.get<PostPayLoad>(this.url+permaLink);
  }

  deletePost(permaLink: Number){
    console.log("perma: "+permaLink)
    return this.httpCLient.delete(this.url+"/api/posts/delete/"+permaLink).subscribe(data=> console.log(data));
  }

}
  