import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AddPostService } from '../add-post.service';
import { PostPayLoad } from '../add-post/post-payload';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Observable<Array<PostPayLoad>>;

  constructor(
    private postService: AddPostService,
    public authService: AuthService,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.SpinnerService.show();
    this.posts = this.postService.getAllPosts();
    this.SpinnerService.hide();

  }
  logout() {
    this.SpinnerService.show();
    this.authService.logout();
    this.SpinnerService.hide();
  }
}