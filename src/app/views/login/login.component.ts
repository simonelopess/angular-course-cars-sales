import { AlertService } from './../../resources/services/alert.service';
import { LoginService } from './../../resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../../resources/models/RequestLogin'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public requestLogin: RequestLogin = { login: '', password: '' };

  constructor(private loginService: LoginService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.router.navigate(['dashboard'])
    },
      httpError => {
        this.alertService.error("CPF ou Senha inválidos", httpError.error.message);
      }
    )
  }
}
