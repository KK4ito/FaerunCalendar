import { Injectable } from '@angular/core';
import { CalendarEntry } from '@app/calender-entry-dialog/calendar-entry-dialog.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventEmitterService {
  calenderEntriesSubject: BehaviorSubject<CalendarEntry[]>;

  constructor() {
    this.calenderEntriesSubject = new BehaviorSubject<CalendarEntry[]>([]);
  }

  loadNewData(data: CalendarEntry[]) {
    this.calenderEntriesSubject.next(data);
  }

  pushNewEvent(singleCalendarEntry: CalendarEntry) {
    const calendarEntries: CalendarEntry[] = this.calenderEntriesSubject.getValue();
    calendarEntries.push(singleCalendarEntry);
    this.loadNewData(calendarEntries);
  }
}
