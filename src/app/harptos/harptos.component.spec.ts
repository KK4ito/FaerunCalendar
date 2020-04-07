import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarptosComponent } from './harptos.component';

describe('HarptosComponent', () => {
  let component: HarptosComponent;
  let fixture: ComponentFixture<HarptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HarptosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
