import { AlertService } from './../../resources/services/alert.service';
import { LoginService } from './../../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../../resources/models/RequestLogin'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin = { login: '', password: '' };

  constructor(private loginService: LoginService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.alertService.info("Funcionalidade não implementada", "Login Realizado",);
    },
      httpError => {
        this.alertService.error("CPF ou Senha inválidos", httpError.error.message);
      }
    )
  }
}
