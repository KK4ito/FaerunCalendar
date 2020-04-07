import { Component, OnDestroy, OnInit } from '@angular/core';
import { HarptosService } from '@app/harptos/harptos.service';
import { HarptosMonth } from '@app/harptos/harptosMonth';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { ActionDaySheetComponent } from '@app/action-day-sheet/action-day-sheet.component';
import { FirebaseService } from '@app/firebase/firebase.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CalendarEntry } from '@app/calender-entry-dialog/calender-entry-dialog.component';
import { CalendarEventEmitterService } from '@app/calendar-event-emitter/calendar-event-emitter.service';

@Component({
  selector: 'app-harptos',
  templateUrl: './harptos.component.html',
  styleUrls: ['./harptos.component.scss'],
})
export class HarptosComponent implements OnInit, OnDestroy {
  private readonly _calendarData: HarptosMonth[];
  private _currentEvents: CalendarEntry[] = [];

  constructor(
    private _harptosService: HarptosService,
    private _bottomSheet: MatBottomSheet,
    private _firebaseService: FirebaseService,
    private _calendarEventEmitterService: CalendarEventEmitterService
  ) {
    this._calendarData = this._harptosService.calendarData;
  }

  ngOnInit(): void {
    this._firebaseService.getAllEntriesForCurrentMonth(1);
    this._calendarEventEmitterService.calenderEntriesSubject.subscribe(
      (currentEvents) => (this._currentEvents = currentEvents)
    );
  }

  ngOnDestroy(): void {
    this._calendarEventEmitterService.calenderEntriesSubject.unsubscribe();
  }

  getHarptosData() {
    return this._calendarData;
  }

  counter(days: number) {
    return new Array(days);
  }

  onTabChanged(event: MatTabChangeEvent) {
    this._currentEvents.length = 0;
    this._firebaseService.getAllEntriesForCurrentMonth(event.index + 1);
  }

  openBottomSheet(month: HarptosMonth, dayAsNumber: number) {
    const config: MatBottomSheetConfig = {
      data: {
        month,
        dayAsNumber,
      },
    };
    this._bottomSheet.open(ActionDaySheetComponent, config);
  }

  checkIfEntryExistForSpecificDay(dayIndex: number): boolean {
    return !(this._currentEvents.findIndex((value) => value.day === dayIndex) === -1);
  }
}
