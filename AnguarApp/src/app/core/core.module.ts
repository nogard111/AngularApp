import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakelogoComponent } from './fakelogo/fakelogo.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { AuthorizationService } from '../user/authorization.service';
import { CanActivateGuard } from './can-activate-guard';


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
  providers: [AuthorizationService, CanActivateGuard]

})
export class CoreModule { }
