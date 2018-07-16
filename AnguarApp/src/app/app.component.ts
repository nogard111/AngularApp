import { Component } from '@angular/core';
import { AuthorizationService } from './user/authorization.service';
import { queryRefresh } from '../../node_modules/@angular/core/src/render3/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthorizationService) {

  }
}
