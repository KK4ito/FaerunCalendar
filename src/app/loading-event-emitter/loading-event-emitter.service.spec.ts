import { TestBed } from '@angular/core/testing';

import { CalendarEventEmitterService } from './calendar-event-emitter.service';

describe('CalendarEventEmitterService', () => {
  let service: CalendarEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
