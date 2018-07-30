import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakelogoComponent } from './fakelogo/fakelogo.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { AuthorizationService } from '../user/authorization.service';
import { CanActivateAuthenticateGuard } from './can-activate-authenticate-guard';
import { BreadCrumbHelperService } from './bread-crumb-helper.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserModule
  ],
  exports: [
    HeaderComponent, FooterComponent, BreadcrumbsComponent
  ],
  declarations: [HeaderComponent, FooterComponent, FakelogoComponent,
    BreadcrumbsComponent
  ],
  providers: [AuthorizationService, CanActivateAuthenticateGuard, BreadCrumbHelperService]

})
export class CoreModule { }
