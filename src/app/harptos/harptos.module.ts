import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarptosComponent } from './harptos.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';
import { HarptosRoutingModule } from '@app/harptos/harptos-routing.module';
import { ActionDaySheetComponent } from '@app/action-day-sheet/action-day-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { CalendarEntryDialogComponent } from '@app/calender-entry-dialog/calendar-entry-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [ActionDaySheetComponent, CalendarEntryDialogComponent, HarptosComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatExpansionModule,
    HarptosRoutingModule,
    FormsModule,
  ],
})
export class HarptosModule {}
