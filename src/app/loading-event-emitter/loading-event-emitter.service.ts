import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingEventEmitterService {
  loadingInProgressSubject: BehaviorSubject<boolean>;

  constructor() {
    this.loadingInProgressSubject = new BehaviorSubject<boolean>(false);
  }

  startProgress(): void {
    this.loadingInProgressSubject.next(true);
  }

  stopProgress(): void {
    this.loadingInProgressSubject.next(false);
  }
}
