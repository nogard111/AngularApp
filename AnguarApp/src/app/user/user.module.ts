import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from './authorization.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../core/snack-bar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginPageComponent, LoginPageComponent],
  providers: [ AuthorizationService, SnackBarService],
  exports: [ LoginPageComponent]
})
export class UserModule {  }
