import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourse } from '../Course-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { BreadCrumbHelperService } from '../../core/bread-crumb-helper.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IsIntegerValidator, IsInteger } from '../../core/Validators/is-integer.validator';
import { Course } from '../Course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  public courseForm: FormGroup = null;
  public isUpdating: boolean;
  id: string;

  constructor(public courseService: CourseService, private router: Router,
    private route: ActivatedRoute, private breadCrumbService: BreadCrumbHelperService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
      if (this.id === 'new') {
        this.initAsNew();
      } else {
        this.courseService.GetItemById(this.id).subscribe((courseOrginal) => {
          if (courseOrginal != null) {
            this.isUpdating = true;

            this.courseForm = new FormGroup({
              // id: new FormControl(courseOrginal.id),
              name: new FormControl(courseOrginal.name, [Validators.required, Validators.maxLength(50)]),
              creationTime: new FormControl(courseOrginal.creationTime, [Validators.required]),
              description: new FormControl(courseOrginal.description, [Validators.required, Validators.maxLength(500)]),
              isTopRated: new FormControl(courseOrginal.isTopRated, [Validators.required]),
              durationTime: new FormControl(courseOrginal.durationTime, [Validators.required, IsInteger])
            });

            this.breadCrumbService.CourseName = courseOrginal.name;
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
    this.id = uuid();
    this.courseForm = new FormGroup({
      // id: uuid(),
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      creationTime: new FormControl(new Date, [Validators.required]),
      description: new FormControl('Description', [Validators.required, Validators.maxLength(500)]),
      isTopRated: new FormControl(false, [Validators.required]),
      durationTime: new FormControl(0, [Validators.required, IsInteger])
    });
    this.breadCrumbService.CourseName = 'new';
  }

  get controls() { return this.courseForm.controls; }

  public save() {
    if (this.isUpdating) {
      this.courseService.UpdateItem(this.id, new Course(this.courseForm.value));
    } else {
      this.courseService.AddItem(new Course(this.courseForm.value));
    }
    this.breadCrumbService.CourseName = '';
    this.router.navigate(['/courses']);
  }
  public cancel() {
    // this.courseService.editCourse = null;
    this.breadCrumbService.CourseName = '';
    this.router.navigate(['/courses']);
  }
  public canSave() {
    return !this.courseForm.valid;
  }
}
