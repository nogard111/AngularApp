import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../Course-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { BreadCrumbHelperService } from '../../core/bread-crumb-helper.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  public course: ICourse;
  public isUpdating: boolean;
  constructor(public courseService: CourseService, private router: Router,
    private route: ActivatedRoute, private breadCrumbService: BreadCrumbHelperService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      const id = params['id'];
      if (id === 'new') {
        this.initAsNew();
      } else {
        this.courseService.GetItemById(id).subscribe((courseOrginal) => {
          if (courseOrginal != null) {
            this.isUpdating = true;
            this.course = Object.assign({}, courseOrginal);
            this.breadCrumbService.CourseName = this.course.name;
          }
        }, () =>
            this.initAsNew()
        );
      }
    }
    );
  }

  private initAsNew() {
    this.isUpdating = false;
    this.course = { id: uuid(), name: '', creationTime: new Date, description: '', isTopRated: false, durationTime: 0 };
    this.breadCrumbService.CourseName = 'new';
  }

  public save() {
    if (this.isUpdating) {
      this.courseService.UpdateItem(this.course.id, this.course);
    } else {
      this.courseService.AddItem(this.course);
    }
    this.breadCrumbService.CourseName = '';
    this.router.navigate(['/courses']);
  }
  public cancel() {
    // this.courseService.editCourse = null;
    this.breadCrumbService.CourseName = '';
    this.router.navigate(['/courses']);
  }
}
