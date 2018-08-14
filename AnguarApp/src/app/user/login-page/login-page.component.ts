import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { IUser } from '../User-interface';
import { Router } from '@angular/router';
import { SnackBarService } from '../../core/snack-bar.service';
import { LoaderService } from '../../core/loader.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  UserName = '';
  UserPass = '';

  constructor(private authService: AuthorizationService,
    private router: Router,
    private snackBarService: SnackBarService,
    public loaderService: LoaderService) {

  }

  ngOnInit() {
  }

  Login() {
    this.loaderService.loading = true;
    setTimeout( () => {
    this.authService.logIn(this.UserName, this.UserPass)
      .subscribe(
        () => {
          this.router.navigate(['/courses']);
          this.loaderService.loading = false;
        },
        (err) => {
          this.snackBarService.showError(err);
          this.loaderService.loading = false;
        }
      );
    }, 2000 );
  }
}
