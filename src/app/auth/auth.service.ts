import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtAuthResponse } from './jwt-auth-response';
import { LoginPayload } from './login-payload';
import { RegisterPayload } from './register-payload';
import {LocalStorageService} from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:9090/';

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload): Observable<any>{
    return this.httpClient.post(this.url + 'api/auth/signup', registerPayload)
  }


login(loginPayLoad: LoginPayload): Observable<boolean> {
  return this.httpClient.post<JwtAuthResponse>(this.url+'login', loginPayLoad).pipe(map (data=>{
this.localStorageService.store('authenticationToken', data.authenticationToken);
this.localStorageService.store('username', data.username);
return true;

  }));
}

}