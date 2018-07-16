import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() public DeleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }


  public onDeleteEvent(id: string) {
    if (this.DeleteEvent != null) {
      this.DeleteEvent.emit(id);
    }
  }

}
