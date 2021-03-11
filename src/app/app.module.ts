import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot([
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},
      {path:'register-success', component: RegisterSuccessComponent}
    
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
