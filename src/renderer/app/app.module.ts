import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Services */
import { FtpService } from './services/ftp.service';

/* Components */
import { AppComponent } from './app.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { ConnectionFormComponent } from './components/connection-form/connection-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    ConnectionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FtpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
