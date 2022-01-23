import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './service/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { RouterModule } from '@angular/router';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientInterceptor } from './http-client-interceptor';
import { PostComponent } from './post/post.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ControlMessages } from './control-messages';
import { ValidationService } from './validation.service';
import { LoginSuccessComponent } from './login-success/login-success.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent,
    HomeComponent,
    HeaderComponent,
    AddPostComponent,
    PostComponent,
    ControlMessages,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'post/:id', component: PostComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register-success', component: RegisterSuccessComponent },
      { path: 'home', component: HomeComponent },
      { path: 'add-post', component: AddPostComponent,  canActivate: [AuthGuard]}
    ], { relativeLinkResolution: 'legacy' }),
    EditorModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }, UserService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule {}

