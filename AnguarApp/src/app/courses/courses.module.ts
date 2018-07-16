import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseBorderDirective } from './course-border.directive';
import { DurationPipe } from './duration.pipe';
import { FilterByTitlePipe } from './filter-by-title.pipe';
import { OrderByDatePipe } from './order-by-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CourseListComponent, CourseListItemComponent,
    ToolboxComponent, CoursePageComponent
  ],
  declarations: [   CourseListComponent,
    CourseListItemComponent, ToolboxComponent,  CoursePageComponent,
    CourseBorderDirective, DurationPipe, FilterByTitlePipe, OrderByDatePipe
  ]
})
export class CoursesModule { }
