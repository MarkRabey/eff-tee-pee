import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ConnectionFormComponent } from './connection-form.component';

// Services
import { FtpService } from '../../services/ftp.service';
import { MockFtpService } from '../../../mock-services/mock-ftp.service';

describe('ConnectionFormComponent', () => {
  let component: ConnectionFormComponent;
  let fixture: ComponentFixture<ConnectionFormComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ConnectionFormComponent],
        imports: [FormsModule],
        providers: [{ provide: FtpService, useClass: MockFtpService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
