import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxComponent } from './toolbox.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolboxComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change visible input', () => {
    fixture.detectChanges();
    const testText = 'new text';
    component.SearchText = testText;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el = input.nativeElement;

      expect(el.value).toBe(testText);
    });
  });

  it('should change data binded to input', () => {
    fixture.detectChanges();
    const testText = 'new text 2';
    component.SearchText = '23';
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    const el = input.nativeElement;

    el.value = testText;
    el.dispatchEvent(new Event('input'));

    expect(component.SearchText).toBe(testText);
  });
});
