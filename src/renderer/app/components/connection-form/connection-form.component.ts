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
    this.ftpService.connect({
      server: this.server,
      username: this.username,
      password: this.password,
      port: this.port,
    });

  }

  disconnect() {
    this.ftpService.disconnect();
  }

}
