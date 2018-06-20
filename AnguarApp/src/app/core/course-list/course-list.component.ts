import { Component, OnInit } from '@angular/core';
import {
  MatListModule,
  MatListItem,
  MatList
} from '@angular/material';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public coursesItems: any[]=[
    {
      id:1,
      Name:"Name #1"
    },
    {
      id:2,
      Name:"Name #2"
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
