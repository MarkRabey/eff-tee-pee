import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import * as jsftp from 'jsftp';
import * as jsftpRmr from 'jsftp-rmr';

const Ftp = jsftpRmr(jsftp);

interface Credentials {
  host: string;
  user: string;
  pass: string;
  port: number;
}

@Injectable()
export class FtpService {
  connected: any;
  private connectedSubject = new Subject<boolean>();
  ftp: any;

  constructor() {
    this.connected = this.connectedSubject.asObservable();
  }

  isConnected() {
    return this.connected;
  }

  connect(credentials: Credentials) {
    console.log(credentials);
    this.ftp = new jsftp(credentials);

    console.log(this.ftp);
  }

  disconnect() {
    this.connectedSubject.next(false);
  }

  getFiles() {
    return [
      {
        name: 'A file'
      },
      {
        name: 'Another file'
      }
    ];
  }
}
