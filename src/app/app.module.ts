import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkersComponent } from './workers/workers.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { DataService } from './data-service.service';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    MeetingsComponent,
    MeetingInfoComponent,
    EditWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
