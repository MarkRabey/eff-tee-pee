import { Component, OnInit } from '@angular/core';

import { FtpService } from '../../services/ftp.service';

@Component({
  selector: 'connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {
  server: string;
  username: string;
  password: string;
  port: number = 21;
  connected: boolean = false;

  constructor(private ftpService: FtpService) { }

  ngOnInit() {
    this.ftpService.connected.subscribe(connected => this.connected = connected);
  }

  connect() {
    console.log(this.connected);

    this.ftpService.connect();
    console.log(this.connected);
  }

  disconnect() {
    this.ftpService.disconnect();
  }

}
