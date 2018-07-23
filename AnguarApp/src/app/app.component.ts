import { Component } from '@angular/core';
import { AuthorizationService } from './user/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthorizationService) {

  }
}
