import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';
import { Course } from '../Course';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy {
  textChange: Observable<string>;

  constructor(public courseService: CourseService) {
    this.textChange = new Observable<string>(
      (observer) => {
        observer.next('2');
      }
    ).pipe(debounceTime(400));
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
    /*
    this.textChange
    .pipe(
        startWith(this.data.lineManager),
        switchMap(value => this.requestEmployees(value))
    );*/
  }
}
