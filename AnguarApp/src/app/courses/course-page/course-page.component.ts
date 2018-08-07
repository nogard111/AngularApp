import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';
import { Course } from '../Course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy {
  constructor(public courseService: CourseService) {
  }

  ngOnInit() {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }



  public LoadMore() {
    console.log('LoadMore');
  }

  public onSearchEvent(text: string) {
    this.courseService.SetFilterText(text);
  }
}
