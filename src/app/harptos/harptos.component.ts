import { Component, OnInit } from '@angular/core';
import { HarptosService } from '@app/harptos/harptos.service';
import { HarptosMonth } from '@app/harptos/harptosMonth';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { ActionDaySheetComponent } from '@app/action-day-sheet/action-day-sheet.component';

@Component({
  selector: 'app-harptos',
  templateUrl: './harptos.component.html',
  styleUrls: ['./harptos.component.scss'],
})
export class HarptosComponent implements OnInit {
  private _calendarData: HarptosMonth[];

  constructor(private _harptosService: HarptosService, private _bottomSheet: MatBottomSheet) {
    this._calendarData = _harptosService.calendarData;
  }

  ngOnInit(): void {}

  getHarptosData() {
    return this._calendarData;
  }

  counter(days: number) {
    return new Array(days);
  }

  openModal(monthId: number, dayAsNumber: number) {
    console.log('KEVIN', monthId, dayAsNumber);
  }

  openBottomSheet(monthId: number, dayAsNumber: number) {
    const config: MatBottomSheetConfig = {
      data: {
        monthId,
        dayAsNumber,
      },
    };
    this._bottomSheet.open(ActionDaySheetComponent, config);
  }
}
