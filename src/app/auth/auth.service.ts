import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtAuthResponse } from './jwt-auth-response';
import { LoginPayload } from './login-payload';
import { RegisterPayload } from './register-payload';

import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';
import { URLBackend } from '../url';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl+'/api/auth/';
  private username = this.localStorageService.retrieve('username');

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    console.log("inside register angular");
    return this.httpClient.post(this.url + 'signup', registerPayload)
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  isAuthenticated() : Boolean {
    return this.localStorageService.retrieve('username')!=null
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}