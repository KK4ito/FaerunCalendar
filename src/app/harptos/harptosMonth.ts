export interface HarptosMonth {
  monthId: number;
  monthName: string;
  monthDescription: string;
  days: number;
}

export interface IrregularDays {
  monthId: number;
  dayName: string;
  occursEveryXYear: number;
}
