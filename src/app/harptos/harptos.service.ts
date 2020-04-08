import { Injectable } from '@angular/core';
import { HarptosMonth, IrregularDays } from '@app/harptos/harptosMonth';

@Injectable({
  providedIn: 'root',
})
export class HarptosService {
  public calendarData: HarptosMonth[];
  public irregularDays: IrregularDays[];

  constructor() {
    this.initHarptosDate();
    this.initExtraHarptosDate();
  }

  private initHarptosDate() {
    this.calendarData = [
      { monthId: 1, monthName: 'Hammer', monthDescription: 'Deepwinter', days: 30 },
      { monthId: 2, monthName: 'Alturiak', monthDescription: 'The Claw of Winter', days: 30 },
      { monthId: 3, monthName: 'Ches', monthDescription: 'The Claw of Sunsets', days: 30 },
      { monthId: 4, monthName: 'Tarsakh', monthDescription: 'The Claw of Storms', days: 30 },
      { monthId: 5, monthName: 'Mirtul', monthDescription: 'The Melting', days: 30 },
      { monthId: 6, monthName: 'Kythorn', monthDescription: 'The Time of Flowers', days: 30 },
      { monthId: 7, monthName: 'Flamerule', monthDescription: 'Summertide', days: 30 },
      { monthId: 8, monthName: 'Eleasias', monthDescription: 'Highsun', days: 30 },
      { monthId: 9, monthName: 'Eleint', monthDescription: 'The Fading', days: 30 },
      { monthId: 10, monthName: 'Marpenoth', monthDescription: 'Leaffall', days: 30 },
      { monthId: 11, monthName: 'Uktar', monthDescription: 'The Rotting', days: 30 },
      { monthId: 12, monthName: 'Nightal', monthDescription: 'The Drawing Down', days: 30 },
    ];
  }

  private initExtraHarptosDate() {
    this.irregularDays = [
      { monthId: 1, dayName: 'Midwinter', occursEveryXYear: 1 },
      { monthId: 4, dayName: 'Greengrass', occursEveryXYear: 1 },
      { monthId: 7, dayName: 'Midsummer', occursEveryXYear: 1 },
      { monthId: 7, dayName: 'Shieldmeet', occursEveryXYear: 4 },
      { monthId: 9, dayName: 'Highharvestide', occursEveryXYear: 1 },
    ];
  }
}
