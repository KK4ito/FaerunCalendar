import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { CalenderEntryDialogComponent } from '@app/calender-entry-dialog/calender-entry-dialog.component';

@Component({
  selector: 'app-action-day-sheet',
  templateUrl: './action-day-sheet.component.html',
})
export class ActionDaySheetComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public dialog: MatDialog,
    private _bottomSheetRef: MatBottomSheetRef<ActionDaySheetComponent>
  ) {}

  ngOnInit(): void {}

  viewEntries(event: MouseEvent): void {
    console.log(this.data);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  addEntry(event: MouseEvent): void {
    const dialogRef = this.dialog.open(CalenderEntryDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
