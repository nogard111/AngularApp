import { Component } from '@angular/core';
import { AuthorizationService } from './user/authorization.service';
import { LoaderService } from './core/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthorizationService, public loaderService: LoaderService) {

  }
}
