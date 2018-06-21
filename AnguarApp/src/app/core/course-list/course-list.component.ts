import { Component, OnInit } from '@angular/core';
import {
  MatListModule,
  MatListItem,
  MatList
} from '@angular/material';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { User } from '../../Classes/User';
import { IUser } from '../../Interfaces/User-interface';
import { ICourse } from '../../Interfaces/Course-interface';
import { Course } from '../../Classes/Course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public coursesItems:ICourse[];

  constructor() { }

  ngOnInit() {
    this.coursesItems=[
      { 
        Id:"C1",
        Title:"Course #1",
        DurationTime:2,
        CreationTime:new Date("2018-01-12T13:30:16"),
        Description:"Desc: Preparing for real life course. some more text and even more and more."
      },
      { 
        Id:"C2",
        Title:"Course #2",
        DurationTime:6,
        CreationTime:new Date("2018-01-13T14:00:00"),
        Description:"Desc: Preparing for real life course part 2"
      },
  
    ];
  }

  public onDeleteEvent(id:string )
  {
    console.log('Deleted id ='+ id);
  }

}
