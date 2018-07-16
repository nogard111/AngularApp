import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakelogoComponent } from './fakelogo/fakelogo.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, FooterComponent,  BreadcrumbsComponent
    ],
  declarations: [HeaderComponent, FooterComponent, FakelogoComponent,
     BreadcrumbsComponent
    ]
})
export class CoreModule { }
