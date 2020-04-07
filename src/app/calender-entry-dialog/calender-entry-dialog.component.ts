import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-calender-entry-dialog',
  templateUrl: './calender-entry-dialog.component.html',
})
export class CalenderEntryDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CalenderEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
export interface DialogData {
  animal: string;
  name: string;
}
