import { Injectable, EventEmitter, Output } from '@angular/core';
import { ICourse } from './Course-interface';
import { ICourseService } from './icourse.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService implements ICourseService {
  public coursesItems: ICourse[] = [];

  @Output() ChangeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    console.log('service created');

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

  Getlist(): ICourse[] {
    return this.coursesItems;
  }
  CreateCourse() {

  }

  GetItemById(id: String): ICourse {
    return this.coursesItems.find(q => q.Id === id);
  }

  UpdateItem(id: String, item: ICourse) {

  }

  RemoveItem(id: String) {
    console.log('Deleted id =' + id);
    this.coursesItems.splice(this.coursesItems.findIndex((value: ICourse) => value.Id === id), 1);
    this.ChangeEvent.emit();
  }

}
