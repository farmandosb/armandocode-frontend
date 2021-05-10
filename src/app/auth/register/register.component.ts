import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPayload } from '../register-payload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ValidationService } from 'src/app/validation.service';
import { ConfirmedValidator } from 'src/app/confirmed-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  registerPayload: RegisterPayload;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      confirmPassword: ['', [Validators.required, ValidationService.confirmPasswordValidator]]
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')

    });
    this.registerPayload = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {

    console.log('register username ' + this.registerPayload.username);

    console.log("invalid: " + this.registerForm.invalid);

    this.submitted = true;
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;



    if (this.registerForm.invalid) {
      console.log("inside if validate");
      return;
    }
    console.log("values: **************" + this.registerForm.dirty + this.registerForm.valid);
    if (this.registerForm.dirty && this.registerForm.valid) {
      console.log("values: **************" + this.registerForm.dirty + this.registerForm.valid);
      this.SpinnerService.show();
      this.authService.register(this.registerPayload).subscribe(data => {
        console.log('register success');
        this.router.navigateByUrl('/register-success');
        this.SpinnerService.hide();

      }, error => {
        console.log('register failed');
        this.SpinnerService.hide();
      }
      );
    }

  }

}
