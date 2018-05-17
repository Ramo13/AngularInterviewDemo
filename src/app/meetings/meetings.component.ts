import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

import { Meeting } from '../models/meeting';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[];
  workers: Worker[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMeetings();
  }

  getMeetings() {
    this.dataService.getWorkers().then(workers => { 
      this.workers = workers;
      this.dataService.getMeetings().then(meetings => {
        meetings.forEach(meeting => {
          this.workers.forEach(worker => {
            if (worker.id == meeting.workerid) {
              meeting.workerFirstName = worker.firstname;
              meeting.workerLastName = worker.lastname;
            }
          });
        });
        this.meetings = meetings;
      });
    });
  }
}
