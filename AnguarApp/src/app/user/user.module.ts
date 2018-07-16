import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from './authorization.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LoginPageComponent, LoginPageComponent],
  providers: [ AuthorizationService],
  exports: [ LoginPageComponent]
})
export class UserModule {  }
