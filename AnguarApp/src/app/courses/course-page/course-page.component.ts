import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy, OnChanges {

  public coursesItems: ICourse[] = [];
  public searchText = '';

  constructor(public courseService: CourseService) {
    this.update();
  }

  ngOnInit() {
    console.log('OnInit');
    this.courseService.ChangeEvent.subscribe(() => { this.update(); });
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.courseService.ChangeEvent.unsubscribe();
  }

  ngOnChanges(): void {
    this.update();
  }

  public update() {
    this.coursesItems = this.courseService.Getlist().map(q => q);
  }

  public LoadMore() {
    console.log('LoadMore');
  }

  GetCourseslist(): ICourse[] {
    this.update();
    return this.coursesItems;
  }

  getCourse(): ICourse {
    //return  this.courseService.GetItemById(this.courseService.editCourse);
    return Object.assign({}, this.courseService.GetItemById(this.courseService.editCourse));
  }
  public onSearchEvent(text: string) {
    this.searchText = text;
  }
}
