import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddPostService } from '../add-post.service';
import { PostPayLoad } from './post-payload';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayLoad: PostPayLoad;
  title = new FormControl('');
  body = new FormControl('');


  constructor(
    private addPostService: AddPostService,
     private router: Router,
     private SpinnerService: NgxSpinnerService
     ) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    })
    this.postPayLoad = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }

  addPost() {
    this.SpinnerService.show();
    this.postPayLoad.content = this.addPostForm.get('body').value;
    this.postPayLoad.title = this.addPostForm.get('title').value;
    this.addPostService.addPost(this.postPayLoad).subscribe(data => {
      this.router.navigateByUrl('/');
      this.SpinnerService.hide();
    }, error => {
      console.log('Fauilure Response');
      this.SpinnerService.hide();
    })

  }
}
