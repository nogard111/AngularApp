import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public emptyName = '-';
  public UserName = '-';
  public buttonText = '-';
  /*
   * LogOut
   */
  public LogOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  constructor(private authService: AuthorizationService, private router: Router) {
    this.refresh();
  }

  ngOnInit() {
    this.authService.AuthenticationEvent.subscribe(
      () => { this.refresh(); });
  }

  refresh() {
    if (this.authService == null ||  this.authService.logedUser == null) {
      this.UserName = this.emptyName;
      this.buttonText = 'Login';
    } else {
      this.UserName = this.authService.logedUser.FirstName;
      this.buttonText = 'Logout';
    }
  }

}
