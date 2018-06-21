import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakelogoComponent } from './fakelogo/fakelogo.component';
import { CourseListComponent } from './course-list/course-list.component';

import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { CoursePageComponent } from './course-page/course-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports:[HeaderComponent,FooterComponent,CourseListComponent,CourseListItemComponent,ToolboxComponent,BreadcrumbsComponent,CoursePageComponent],
  declarations: [HeaderComponent, FooterComponent, FakelogoComponent, CourseListComponent, CourseListItemComponent, ToolboxComponent, BreadcrumbsComponent, CoursePageComponent]
})
export class CoreModule { }
