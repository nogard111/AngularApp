import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FakelogoComponent } from './fakelogo/fakelogo.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent],
  declarations: [HeaderComponent, FooterComponent, FakelogoComponent, CourseListComponent]
})
export class CoreModule { }
