import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';
import { Course } from '../Course';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy {
  textChange: Subject<string>;

  constructor(public courseService: CourseService) {
    this.textChange = new Subject<string>();
    this.textChange.pipe(debounceTime(400)).subscribe(
      (text) => {
        if (text === '' || text.length > 2) { this.courseService.SetFilterText(text); }
        console.log((new Date).toString()  );
      }
    );
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
    this.textChange.next(text);
  }
}
