import { ResponseLogin } from './../models/ResponseLogin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginReponse: ResponseLogin = { jwt: '' };

  public clear(): void {
    this.loginReponse = { jwt: '' };
  }

  public isAuthenticated(): boolean {
    return Boolean(this.loginReponse.jwt.length > 0)
  }
}
