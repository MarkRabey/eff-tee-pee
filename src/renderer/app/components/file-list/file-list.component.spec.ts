import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FileListComponent } from './file-list.component';

// Services
import { FtpService } from '../../services/ftp.service';
import { MockFtpService } from '../../../mock-services/mock-ftp.service';

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FileListComponent],
        imports: [FormsModule],
        providers: [{ provide: FtpService, useClass: MockFtpService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
