import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calender-entry-dialog',
  templateUrl: './calender-entry-dialog.component.html',
})
export class CalenderEntryDialogComponent implements OnInit {
  public dialogTitle: string;
  public calendarEntry: CalendarEntry = {
    monthId: -1,
    day: -1,
    title: '',
    content: '',
  };

  constructor(public dialogRef: MatDialogRef<CalenderEntryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogTitle = data.month.monthName + ' Day ' + (data.dayAsNumber + 1);
    this.calendarEntry.monthId = data.month.monthId;
    this.calendarEntry.day = data.dayAsNumber;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

export interface CalendarEntry {
  monthId: number;
  day: number;
  title: string;
  content: string;
}
