import { Component, OnInit, Input } from '@angular/core';
import {
  MatListModule,
  MatListItem,
  MatList
} from '@angular/material';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';

import { ICourse } from '../Course-interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() public coursesItems: ICourse[] = [];

  constructor() { }

  ngOnInit() {

  }

  public onDeleteEvent(id: string) {
    console.log('Deleted id =' + id);
    this.coursesItems.splice(this.coursesItems.findIndex((value: ICourse) => value.Id === id), 1);
  }

}
