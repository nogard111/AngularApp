import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Course } from '../../Classes/Course';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('NgFor work for courses', () => {

    const item: Course = {
      Id: 'C2',
      Title: 'Course #2',
      DurationTime: 6,
      CreationTime: new Date('2018-01-13T14:00:00'),
      Description: 'Desc: Preparing for real life course part 2'
    };

    component.coursesItems =  [item,item];
    fixture.detectChanges();
    // check html
    //const courseEl = fixture.debugElement.query(By.css('.test-tag-1'));
    //const courseNative  = courseEl.nativeElement;
    const courseEls = fixture.debugElement.queryAll(By.css('.test-tag-1'));

    expect(courseEls.length).toBe(2);
    //expect(courseNative).toBeDefined();
    // expect(courseNative.textContent).toContain(item.Description);
  });
});
