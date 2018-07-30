import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  MatListModule,
  MatListItem,
  MatList
} from '@angular/material';

import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() public coursesItems: ICourse[] = [];

  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }

  public onDeleteEvent(id: string) {
    this.courseService.RemoveItem(id);
  }
  public onEditEvent(id: string) {
    console.log('Edit');
    // this.courseService.editCourse = id;
    this.router.navigate(['/course', id ]);
  }
}
