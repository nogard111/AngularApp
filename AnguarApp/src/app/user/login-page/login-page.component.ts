import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { IUser } from '../User-interface';
import { Router } from '@angular/router';
import { SnackBarService } from '../../core/snack-bar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthorizationService,
    private router: Router,
    private snackBarService: SnackBarService) { }

  UserName = '';
  UserPass = '';

  ngOnInit() {
  }

  Login() {
    this.authService.logIn(this.UserName, this.UserPass)
      .subscribe(
        () => this.router.navigate(['/courses']),
        (err) => this.snackBarService.showError(err));
  }
}
