import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../Course-interface';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit, OnDestroy {


  public coursesItems: ICourse[] = [];
  public searchText = '';

  constructor() { }

  ngOnInit() {
    console.log('OnInit');

    this.coursesItems = [
      {
        Id: 'C1',
        Title: 'Course #1',
        DurationTime: 145,
        CreationTime: new Date('2018-07-09T13:30:16'),
        Description: 'Desc: Preparing for real life course. some more text and even more and more.',
        TopRated: true
      },
      {
        Id: 'C2',
        Title: 'Course #2',
        DurationTime: 120,
        CreationTime: new Date('2018-07-19T14:00:00'),
        Description: 'Desc: Preparing for real life course part 2',
        TopRated: false
      },
      {
        Id: 'C3',
        Title: 'Course #3',
        DurationTime: 30,
        CreationTime: new Date('2018-02-22T14:00:00'),
        Description: 'Desc: Preparing for real life course part 3',
        TopRated: true
      },

    ];

  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  public LoadMore() {
    console.log('LoadMore');
  }

  public onSearchEvent(text: string) {
    this.searchText = text;
  }

}
