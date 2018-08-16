import { Component, OnInit , OnDestroy} from '@angular/core';
import { AuthorizationService } from '../../user/authorization.service';
import { Router } from '@angular/router';
import { IUser } from '../../user/User-interface';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userInfoSubscription: Subscription;

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
  }
  ngOnInit() {
    this.userInfoSubscription = this.authService.logedUser.subscribe((user) => this.refresh(user));
  }
  ngOnDestroy(): void {
    this.userInfoSubscription.unsubscribe();
  }

  refresh(logedUser: IUser) {
    if (logedUser == null) {
      this.UserName = this.emptyName;
      this.buttonText = 'Login';
    } else {
      this.UserName = logedUser.FirstName;
      this.buttonText = 'Logout';
    }
  }

}
