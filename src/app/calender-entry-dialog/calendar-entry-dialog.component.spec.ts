import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEntryDialogComponent } from './calendar-entry-dialog.component';

describe('CalenderEntryDialogComponent', () => {
  let component: CalendarEntryDialogComponent;
  let fixture: ComponentFixture<CalendarEntryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEntryDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
