import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { IUser } from '../User-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthorizationService, private router: Router) { }

  UserName = '';
  UserPass = '';

  ngOnInit() {
  }

  Login() {
    if (this.authService.logIn(this.UserName, this.UserPass)) {
      this.router.navigate(['/courses']);
    }
  }
}
