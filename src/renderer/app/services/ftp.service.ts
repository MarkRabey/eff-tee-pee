import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class FtpService {
  connected: Observable<boolean>;
  private connectedSubject = new Subject<boolean>();
  ftp: any;

  constructor() {
    this.connected = this.connectedSubject.asObservable();
  }

  isConnected() {
    return this.connected;
  }

  connect() {
    this.connectedSubject.next(true);
  }

  disconnect() {
    this.connectedSubject.next(false);
  }

  getFiles() {
    return [
      {
        name: 'A file',
      },
      {
        name: 'Another file'
      }
    ];
  }
}
