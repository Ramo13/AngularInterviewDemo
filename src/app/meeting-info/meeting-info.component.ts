import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
import { Worker } from '../models/worker';
import { MeetingDb } from '../models/meetingDb';

@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.css']
})
export class MeetingInfoComponent implements OnInit {
  workers: Worker[];
  meeting: MeetingDb;
  date: Date;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getWorkers();
    this.meeting = new MeetingDb();
  }

  getWorkers() {
    this.dataService.getWorkers().then(workers => this.workers = workers);
  }

  onAddMeeting(formValue): void {
    this.meeting.arrivalTime = formValue.arrivaltime;
    this.meeting.date = formValue.date;
    if (formValue.worker == "") {
       this.meeting.workerId = this.workers[0].id;
    }
    else {
      this.workers.forEach(worker => {
        if (worker.firstname + " " + worker.lastname == formValue.worker) this.meeting.workerId = worker.id;
      });
    }
    this.meeting.arrivedOnTime = (formValue.arrivedontime !== true) ? false : true;
    this.dataService.createMeeting(this.meeting).then(() => window.location.reload());
  }
}
