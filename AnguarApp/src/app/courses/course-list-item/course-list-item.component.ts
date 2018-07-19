import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() public course: ICourse;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }


  public Edit() {
    console.log('Edit');
  }

  public Delete() {
    if (confirm('Are you sure to delete ' + this.course.Title)) {
      this.courseService.RemoveItem(this.course.Id);
    }

  }
}
