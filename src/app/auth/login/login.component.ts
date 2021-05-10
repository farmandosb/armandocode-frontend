import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth.service';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private SpinnerService: NgxSpinnerService
    ) { 
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginPayload = {
      username: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.SpinnerService.show();
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    //console.log("username:"+this.loginPayload.username);
    //console.log("password:"+this.loginPayload.password);
    
    this.authService.login(this.loginPayload).subscribe(data=>{
      console.log('login success');
      this.router.navigateByUrl('/');
      this.SpinnerService.hide();

    },  error => {
      console.log('login failed');
      this.SpinnerService.hide();
    });

  }

}
