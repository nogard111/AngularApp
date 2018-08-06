import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Course } from '../Course';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
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

  it('NgFor show 1 course', () => {

    const item: Course = {
      id: 'C2',
      name: 'Course #2',
      durationTime: 6,
      creationTime: new Date('2018-01-13T14:00:00'),
      description: 'Desc: Preparing for real life course part 2',
      isTopRated: true
    };

    component.coursesItems = [item];
    fixture.detectChanges();
    const courseEls = fixture.debugElement.queryAll(By.css('.test-tag-1'));

    expect(courseEls.length).toBe(1);
  });

  it('NgFor work for 2 courses', () => {

    const item: Course = {
      id: 'C2',
      name: 'Course #2',
      durationTime: 6,
      creationTime: new Date('2018-01-13T14:00:00'),
      description: 'Desc: Preparing for real life course part 2',
      isTopRated: true
    };

    component.coursesItems = [item, item];
    fixture.detectChanges();
    // check html
    // const courseEl = fixture.debugElement.query(By.css('.test-tag-1'));
    // const courseNative  = courseEl.nativeElement;
    const courseEls = fixture.debugElement.queryAll(By.css('.test-tag-1'));

    expect(courseEls.length).toBe(2);
    // expect(courseNative).toBeDefined();
    // expect(courseNative.textContent).toContain(item.description);
  });
});
