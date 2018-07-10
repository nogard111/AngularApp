import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../Classes/Course';
import { By } from '@angular/platform-browser';


@Component({
  template: '<app-course-list-item [course]="course" (DeleteEvent)="onDeleteEvent($event)"></app-course-list-item>'
})
class TestHostComponent {
  public deletedId: string;
  public course: Course = {
      Id: 'C5',
      Title: 'Course #5',
      DurationTime: 65,
      CreationTime: new Date('2018-01-13T14:00:00'),
      Description: 'Desc: Preparing for real life course part 5',
      TopRated: true
    };

  public onDeleteEvent(id: string) {
    this.deletedId = id;
  }
}

describe('CourseListItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, CourseListItemComponent ],
      imports: [ FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rise DeleteEvent', () => {
    fixture.detectChanges();
    const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
    deleteButton.triggerEventHandler('click', null);

     expect(component.deletedId).toEqual(component.course.Id);
  });
});
