import { Component, OnInit } from '@angular/core';

import { FtpService } from '../../services/ftp.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {
  connected = false;

  constructor(private ftpService: FtpService) {}

  ngOnInit() {
    this.ftpService.connected.subscribe(connected => (this.connected = connected));
  }
}
