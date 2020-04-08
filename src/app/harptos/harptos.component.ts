import { Component, OnDestroy, OnInit } from '@angular/core';
import { HarptosService } from '@app/harptos/harptos.service';
import { HarptosMonth } from '@app/harptos/harptosMonth';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { ActionDaySheetComponent } from '@app/action-day-sheet/action-day-sheet.component';
import { FirebaseService } from '@app/firebase/firebase.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CalendarEntry } from '@app/calender-entry-dialog/calendar-entry-dialog.component';
import { CalendarEventEmitterService } from '@app/calendar-event-emitter/calendar-event-emitter.service';
import { Subscription } from 'rxjs';
import { LoadingEventEmitterService } from '@app/loading-event-emitter/loading-event-emitter.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-harptos',
  templateUrl: './harptos.component.html',
  styleUrls: ['./harptos.component.scss'],
})
export class HarptosComponent implements OnInit, OnDestroy {
  private readonly _redShades = ['#ff4c4c', '#ff2626', '#ff0000', '#b30000', '#660000'];
  private readonly _calendarData: HarptosMonth[];
  private _currentEvents: CalendarEntry[] = [];
  private _subscription: Subscription;
  private _loadingSubscription: Subscription;
  private _snackBarRef: MatSnackBarRef<SimpleSnackBar>;

  constructor(
    private _snackBar: MatSnackBar,
    private _harptosService: HarptosService,
    private _bottomSheet: MatBottomSheet,
    private _firebaseService: FirebaseService,
    private _calendarEventEmitterService: CalendarEventEmitterService,
    private _loadingEventEmitterService: LoadingEventEmitterService
  ) {
    this._calendarData = this._harptosService.calendarData;
  }

  ngOnInit(): void {
    this._firebaseService.getAllEntriesForCurrentMonth(1);
    this._subscription = this._calendarEventEmitterService.calenderEntriesSubject.subscribe(
      (currentEvents) => (this._currentEvents = currentEvents)
    );
    this._loadingSubscription = this._loadingEventEmitterService.loadingInProgressSubject.subscribe((next) => {
      if (next) {
        this._snackBarRef = this._snackBar.open('Processing');
      } else {
        this._snackBarRef?.dismiss();
      }
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this._loadingSubscription.unsubscribe();
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

  checkIfEntryExistForSpecificDay(dayIndex: number): number {
    return this._currentEvents.filter((value) => value.day === dayIndex).length;
  }

  getColorShade(dayIndex: number) {
    const eventsForSpecificDay = this._currentEvents.filter((value) => value.day === dayIndex).length;
    if (eventsForSpecificDay > this._redShades.length) {
      return this._redShades[this._redShades.length - 1];
    }
    return this._redShades[eventsForSpecificDay - 1];
  }
}
