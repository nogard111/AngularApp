import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../Course-interface';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public DeleteEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public Edit() {
    console.log('Edit');
  }

  public Delete() {
    if (confirm('Are you sure to delete ' + this.course.Title)) {
      if (this.DeleteEvent != null) {
        this.DeleteEvent.emit(this.course.Id);
      }
    }

  }
}