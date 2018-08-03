import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';
import { Course } from '../Course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy, OnChanges {

  public coursesItems: ICourse[] = [];
  public searchText = '';
  public subscription: any;

  constructor(public courseService: CourseService) {
    this.update();
  }

  ngOnInit() {
    console.log('OnInit');
    this.subscription = this.courseService.ChangeEvent.subscribe(() => { this.update(); });
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    this.update();
  }

  public update() {
    this.courseService.Getlist().subscribe((data) => this.coursesItems = data.map(q => q));
  }

  public LoadMore() {
    console.log('LoadMore');
  }

  GetCourseslist(): ICourse[] {
    this.update();
    return this.coursesItems;
  }

  getCourse(): ICourse {
    // return  this.courseService.GetItemById(this.courseService.editCourse);
    return new Course(); // Object.assign({}, this.courseService.GetItemById(this.courseService.editCourse));
  }
  public onSearchEvent(text: string) {
    this.searchText = text;
  }
}
