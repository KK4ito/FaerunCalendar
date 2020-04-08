import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import {
  CalendarEntry,
  CalendarEntryDialogComponent,
} from '@app/calender-entry-dialog/calendar-entry-dialog.component';
import { FirebaseService } from '@app/firebase/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-action-day-sheet',
  templateUrl: './action-day-sheet.component.html',
})
export class ActionDaySheetComponent implements OnInit {
  readonly SUCCESS_STRING = 'Successfully created: ';
  readonly FAILED_STRING = 'Failed to create: ';

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public dialog: MatDialog,
    private _bottomSheetRef: MatBottomSheetRef<ActionDaySheetComponent>,
    private _firebaseService: FirebaseService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  viewEntries(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    this._firebaseService.getAllCalendarEntries();
  }

  addEntry(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    const dialogRef = this.dialog.open(CalendarEntryDialogComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result: CalendarEntry) => {
      if (result) {
        this._firebaseService.createCalendarEntry(result).then((success) => {
          let snackBarMessage;
          success
            ? (snackBarMessage = this.SUCCESS_STRING.concat(result.title))
            : this.FAILED_STRING.concat(result.title);
          this._snackBar.open(snackBarMessage, 'Dismiss');
        });
      }
    });
  }
}
