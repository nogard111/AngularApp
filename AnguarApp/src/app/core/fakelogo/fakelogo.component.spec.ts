import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakelogoComponent } from './fakelogo.component';

describe('FakelogoComponent', () => {
  let component: FakelogoComponent;
  let fixture: ComponentFixture<FakelogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakelogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakelogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
