import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../Course';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../duration.pipe';
import { CourseBorderDirective } from '../course-border.directive';
import { ICourseService } from '../icourse.service';
import { CourseTestService } from './course-test-service';
import { CourseService } from '../course.service';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let item: Course;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent, DurationPipe, CourseBorderDirective ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ {provide: CourseService, useClass: CourseTestService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;

    item = {
      id: 'C2',
      Title: 'Course #2',
      DurationTime: 6,
      CreationTime: new Date('2018-01-13T14:00:00'),
      Description: 'Desc: Preparing for real life course part 2',
      TopRated: true
    };

    component.course = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected event when clicked', () => {
    const sevice = TestBed.get(CourseService);
    component.Delete();
     expect(sevice.deleteId).toBe(item.id);
  });

  it('Display proper title', () => {
    fixture.detectChanges();
    const courseEl = fixture.debugElement.query(By.css('.courseItem'));

    expect(courseEl.nativeElement.textContent.toLocaleLowerCase()).toContain(item.Title.toLocaleLowerCase());
  });
  it('Display proper description', () => {
    fixture.detectChanges();
    const courseEl = fixture.debugElement.query(By.css('.courseItem'));

    expect(courseEl.nativeElement.textContent).toContain(item.Description);
  });
  it('Display proper DurationTime', () => {
    fixture.detectChanges();
    const courseEl = fixture.debugElement.query(By.css('.courseItem'));

    expect(courseEl.nativeElement.textContent).toContain(item.DurationTime);
  });

});
