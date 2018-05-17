import { WorkersComponent } from '../workers/workers.component';
import { MeetingsComponent } from '../meetings/meetings.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'workers', pathMatch: 'full'},
  {path: 'workers', component: WorkersComponent},
  {path: 'meetings', component: MeetingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
