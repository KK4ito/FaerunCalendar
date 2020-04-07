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
import { CalenderEntryDialogComponent } from '@app/calender-entry-dialog/calender-entry-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ActionDaySheetComponent, CalenderEntryDialogComponent, HarptosComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    MatBottomSheetModule,
    MatDialogModule,
    HarptosRoutingModule,
    FormsModule,
  ],
})
export class HarptosModule {}