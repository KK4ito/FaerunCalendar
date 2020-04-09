import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEntryListDialogComponent } from './calendar-entry-list-dialog.component';

describe('CalendarEntryListDialogComponent', () => {
  let component: CalendarEntryListDialogComponent;
  let fixture: ComponentFixture<CalendarEntryListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEntryListDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEntryListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
