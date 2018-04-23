import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import * as jsftp from 'jsftp';

console.log(jsftp);

interface Credentials {
  server: string;
  username: string;
  password: string;
  port: number;
};

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

  connect(credentials: Credentials) {
    
    this.ftp = new jsftp(credentials);

    // console.log(this.ftp);
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
