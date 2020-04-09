import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEntry } from '@app/calender-entry-dialog/calendar-entry-dialog.component';

@Component({
  selector: 'app-calender-entry-list-dialog',
  templateUrl: './calendar-entry-list-dialog.component.html',
  styleUrls: ['./calendar-entry-list-dialog.component.scss'],
})
export class CalendarEntryListDialogComponent implements OnInit {
  public eventsForCurrentDay: CalendarEntry[] = [];

  constructor(
    public dialogRef: MatDialogRef<CalendarEntryListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.eventsForCurrentDay = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
