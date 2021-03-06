import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../Course';
import { By } from '@angular/platform-browser';
import { DurationPipe } from '../duration.pipe';
import { CourseBorderDirective } from '../course-border.directive';
import { CourseService } from '../course.service';
import { CourseTestService } from './course-test-service';
import { ICourseService } from '../icourse.service';


@Component({
  template: '<app-course-list-item [course]="course"></app-course-list-item>'
})
class TestHostComponent {
  public deletedId: string;
  public course: Course = {
    id: 'C5',
    name: 'Course #5',
    durationTime: 65,
    creationTime: new Date('2018-01-13T14:00:00'),
    description: 'Desc: Preparing for real life course part 5',
    isTopRated: true
  };

  public onDeleteEvent(id: string) {
    this.deletedId = id;
  }
}

describe('CourseListItemComponentHost', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, CourseListItemComponent, DurationPipe, CourseBorderDirective],
      imports: [FormsModule],
      providers: [{ provide: ICourseService, useClass: CourseTestService }]
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
  /*
    it('should rise DeleteEvent', () => {
      fixture.detectChanges();
      const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
      deleteButton.triggerEventHandler('click', null);
  
       expect(component.CourseService.deletedId).toEqual(component.course.id);
    });*/
});
