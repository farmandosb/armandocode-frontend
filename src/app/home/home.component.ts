import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AddPostService } from '../add-post.service';
import { PostPayLoad } from '../add-post/post-payload';
import { AuthService } from '../auth/auth.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Array<PostPayLoad>>;
  faUser = faUser;

  constructor(
    private postService: AddPostService,
    public authService: AuthService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.SpinnerService.show();
    this.posts = this.postService.getAllPosts();
    
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.SpinnerService.hide();
    }, 5000);

  }
  logout() {
   
    this.authService.logout();
 
  }
}