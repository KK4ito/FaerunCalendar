import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoadingEventEmitterService } from '@app/loading-event-emitter/loading-event-emitter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calender-entry-dialog',
  templateUrl: './calendar-entry-dialog.component.html',
  styleUrls: ['./calendar-entry-dialog.component.scss'],
})
export class CalendarEntryDialogComponent {
  public dialogTitle: string;
  public calendarEntry: CalendarEntry = {
    monthId: -1,
    day: -1,
    title: '',
    content: '',
  };

  constructor(public dialogRef: MatDialogRef<CalendarEntryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogTitle = data.month.monthName + ' Day ' + (data.dayAsNumber + 1);
    this.calendarEntry.monthId = data.month.monthId;
    this.calendarEntry.day = data.dayAsNumber;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface CalendarEntry {
  monthId: number;
  day: number;
  title: string;
  content: string;
}
