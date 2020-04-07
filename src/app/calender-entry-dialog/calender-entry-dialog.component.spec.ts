import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderEntryDialogComponent } from './calender-entry-dialog.component';

describe('CalenderEntryDialogComponent', () => {
  let component: CalenderEntryDialogComponent;
  let fixture: ComponentFixture<CalenderEntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderEntryDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
