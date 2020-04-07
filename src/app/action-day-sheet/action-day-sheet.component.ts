import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CalenderEntryDialogComponent } from '@app/calender-entry-dialog/calender-entry-dialog.component';
import { FirebaseService } from '@app/firebase/firebase.service';

@Component({
  selector: 'app-action-day-sheet',
  templateUrl: './action-day-sheet.component.html',
})
export class ActionDaySheetComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public dialog: MatDialog,
    private _bottomSheetRef: MatBottomSheetRef<ActionDaySheetComponent>,
    private _firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {}

  viewEntries(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    this._firebaseService.getAllCalendarEntries();
  }

  addEntry(event: MouseEvent): void {
    const dialogRef = this.dialog.open(CalenderEntryDialogComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._firebaseService.createCalendarEntry(result);
      }
    });
  }
}
