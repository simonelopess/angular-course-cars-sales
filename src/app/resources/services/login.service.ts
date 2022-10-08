import { RequestLogin } from './../models/RequestLogin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from '../models/ResponseLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin);

    //método post retorna um Observable

  }
}
