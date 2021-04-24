import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPostService } from './add-post.service';
import { PostPayLoad } from './add-post/post-payload';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'armandocode';
  
    constructor(public authService:AuthService){
  
    }
    ngOnInit(){
  
    }
    logout(){
      this.authService.logout();
    }

 
}
