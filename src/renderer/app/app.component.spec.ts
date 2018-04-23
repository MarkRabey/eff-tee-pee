import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';
import { FileListComponent } from './components/file-list/file-list.component';

// Services
import { FtpService } from './services/ftp.service';
import { MockFtpService } from '../mock-services/mock-ftp.service';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, ConnectionFormComponent, FileListComponent],
        imports: [FormsModule],
        providers: [{ provide: FtpService, useClass: MockFtpService }]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    })
  );
});
