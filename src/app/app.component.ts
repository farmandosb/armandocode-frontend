import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
  env = environment;
  private username;
  
    constructor(public authService:AuthService,private spinner: NgxSpinnerService){
      //console.log("enviroment production: "+environment.apiUrl); // Logs false for default environment
      this.username = authService.getUsername;
  
    }
    ngOnInit(){
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);
  
    }
    logout(){
      this.authService.logout();
    }

    getUsername(): String {
      return this.username;
    }
 
}
