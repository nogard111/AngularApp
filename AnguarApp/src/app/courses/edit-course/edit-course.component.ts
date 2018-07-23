import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../Course-interface';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input() public course: ICourse;

  constructor(public courseService: CourseService) { }

  ngOnInit() {
  }
  public save() {this.courseService.UpdateItem(this.course.Id, this.course); }
  public cancel() {this.courseService.editCourse = null; }
}
