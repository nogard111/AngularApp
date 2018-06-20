import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakelogoComponent } from './fakelogo/fakelogo.component';
import { CourseListComponent } from './course-list/course-list.component';

import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,CourseListComponent,CourseListItemComponent],
  declarations: [HeaderComponent, FooterComponent, FakelogoComponent, CourseListComponent, CourseListItemComponent]
})
export class CoreModule { }
