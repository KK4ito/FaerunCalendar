import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDaySheetComponent } from './action-day-sheet.component';

describe('ActionDaySheetComponent', () => {
  let component: ActionDaySheetComponent;
  let fixture: ComponentFixture<ActionDaySheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionDaySheetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDaySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
