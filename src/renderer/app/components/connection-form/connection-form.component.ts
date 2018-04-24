import { Component, OnInit } from '@angular/core';

import { FtpService } from '../../services/ftp.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {
  host: string;
  username: string;
  password: string;
  port = 21;
  connected = false;

  constructor(private ftpService: FtpService) {}

  ngOnInit() {
    this.ftpService.connected.subscribe(connected => (this.connected = connected));
  }

  connect() {
    this.ftpService.connect({
      host: this.host,
      user: this.username,
      pass: this.password,
      port: this.port
    });
  }

  disconnect() {
    this.ftpService.disconnect();
  }
}
