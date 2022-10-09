import { AuthService } from './auth.service';
import { RequestLogin } from './../models/RequestLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from '../models/ResponseLogin';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {                                       //encapsula o JWT, armazenando no auth login response no service auth
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin).pipe(tap((jwt) => this.authService.loginReponse = jwt));

    //método post retorna um Observable

  }
}
