import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private firebase: FirebaseX) { }

  public log(...logs: any) {
    const prefix = 'sys:: ';
    console.groupCollapsed();
    console.trace(prefix, logs);
    console.groupEnd();
    this.firebase.logEvent('log', logs);

  }
}
