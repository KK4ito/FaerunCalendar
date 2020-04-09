import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Injectable } from '@angular/core';
import { CalendarEntry } from '@app/calender-entry-dialog/calendar-entry-dialog.component';
import { CalendarEventEmitterService } from '@app/calendar-event-emitter/calendar-event-emitter.service';
import { LoadingEventEmitterService } from '@app/loading-event-emitter/loading-event-emitter.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  readonly DB_COLLECTION_NAME_CALENDAR_ENTRY = 'calendarEntry';
  private _db: firebase.firestore.Firestore;

  constructor(
    private _calendarEventEmitterService: CalendarEventEmitterService,
    private _loadingEventEmitterServer: LoadingEventEmitterService
  ) {
    this.initFirebaseWithConfig();
  }

  getAllEntriesForCurrentMonth(monthId: number) {
    const events: CalendarEntry[] = [];
    this._db
      .collection(this.DB_COLLECTION_NAME_CALENDAR_ENTRY)
      .where('monthId', '==', monthId)
      .get()
      .then((result) => {
        result.docs.forEach((doc) => {
          events.push(doc.data() as CalendarEntry);
        });
        this._calendarEventEmitterService.loadNewData(events);
      });
  }

  getAllCalendarEntriesForCurrentDayAndMonth(monthId: number, dayAsNumber: number) {
    const events: CalendarEntry[] = [];
    return this._db
      .collection(this.DB_COLLECTION_NAME_CALENDAR_ENTRY)
      .where('monthId', '==', monthId)
      .where('day', '==', dayAsNumber)
      .get()
      .then((result) => {
        result.docs.forEach((doc) => {
          events.push(doc.data() as CalendarEntry);
        });
      })
      .then(() => events);
  }

  createCalendarEntry(calendarEntry: any): Promise<boolean> {
    this._loadingEventEmitterServer.startProgress();
    return this._db
      .collection(this.DB_COLLECTION_NAME_CALENDAR_ENTRY)
      .add(calendarEntry)
      .then((docRef) => {
        this._calendarEventEmitterService.pushNewEvent(calendarEntry);
        console.log('Document written with ID: ', docRef.id);
        return true;
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        return false;
      })
      .finally(() => this._loadingEventEmitterServer.stopProgress());
  }

  private initFirebaseWithConfig() {
    if (firebase.apps.length) {
      console.log('Firebase already initialized, skipping config');
      return;
    }
    const firebaseConfig = {
      apiKey: 'AIzaSyAsXMt86Fe9yfcJxGro0bQ1AZ8JBOXlPyE',
      authDomain: 'calendaroffaerun.firebaseapp.com',
      databaseURL: 'https://calendaroffaerun.firebaseio.com',
      projectId: 'calendaroffaerun',
      storageBucket: 'calendaroffaerun.appspot.com',
      messagingSenderId: '627469182485',
      appId: '1:627469182485:web:535ad8d63243d30060501c',
      measurementId: 'G-NEKPLZK494',
    };
    firebase.initializeApp(firebaseConfig);
    this._db = firebase.firestore();
    if (location.hostname === 'localhost') {
      this._db.settings({
        host: 'localhost:8181',
        ssl: false,
      });
    }
  }
}
