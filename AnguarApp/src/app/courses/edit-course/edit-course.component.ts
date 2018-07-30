import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../Course-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  public course: ICourse;
  public isUpdating: boolean;
  constructor(public courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      const id = params['id'];
      if (id == null) {
        this.isUpdating = false;
        this.course = { Id: uuid(), Title: '', CreationTime: new Date, Description: '', TopRated: false, DurationTime: 0 };

      } else {
        this.isUpdating = true;
        this.course = Object.assign({}, this.courseService.GetItemById(id));
      }

    }
    );
  }
  public save() {
    if (this.isUpdating) {
      this.courseService.UpdateItem(this.course.Id, this.course);
    } else {
      this.courseService.AddItem(this.course);
    }
    this.router.navigate(['/courses']);
  }
  public cancel() {
    // this.courseService.editCourse = null;
    this.router.navigate(['/courses']);
  }
}
