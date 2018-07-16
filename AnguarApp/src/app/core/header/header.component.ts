import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public emptyName = '-';
  public UserName = '-';
  /*
   * LogOut
   */
  public LogOut() {
    this.authService.logOut();
  }

  constructor(private authService: AuthorizationService) {
    this.refresh();
  }

  ngOnInit() {
    this.authService.AuthenticationEvent.subscribe(
      () => { this.refresh(); });
  }

  refresh() {
    if (this.authService == null ||  this.authService.logedUser == null) {
      this.UserName = this.emptyName;
    } else {
      this.UserName = this.authService.logedUser.FirstName;
    }
  }

}
