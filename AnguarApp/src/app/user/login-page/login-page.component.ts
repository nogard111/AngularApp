import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { IUser } from '../User-interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  UserName = '';
  UserPass = '';

  ngOnInit() {
  }

  Login() {
    this.authService.logIn(this.UserName, this.UserPass);
  }
}
