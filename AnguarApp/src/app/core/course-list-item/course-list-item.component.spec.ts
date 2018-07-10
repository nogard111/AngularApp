import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../Classes/Course';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../duration.pipe';
import { DatePipe } from '@angular/common';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let item: Course;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;

    item = {
      Id: 'C2',
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
    component.DeleteEvent.subscribe(deleteItem => expect(deleteItem).toBe(item.Id));
    component.Delete();
  });

  it('Display proper title', () => {
    fixture.detectChanges();
    const courseEl = fixture.debugElement.query(By.css('.courseItem'));

    expect(courseEl.nativeElement.textContent).toContain(item.Title);
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
