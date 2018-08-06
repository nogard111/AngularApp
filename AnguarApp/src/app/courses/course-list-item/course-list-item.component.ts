import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../Course-interface';


@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {

  @Input() public course: ICourse;
  @Output() public DeleteEvent = new EventEmitter<string>();
  @Output() public EditEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public Edit() {
    if (this.EditEvent != null) {
      this.EditEvent.emit(this.course.id);
    }
  }

  public Delete() {
    if (confirm('Are you sure to delete ' + this.course.name)) {
      if (this.DeleteEvent != null) {
        this.DeleteEvent.emit(this.course.id);
      }
    }
  }
}
