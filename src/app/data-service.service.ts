import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Worker } from './models/worker';
import { Meeting } from './models/meeting';
import { MeetingDb } from './models/meetingDb';


@Injectable()
export class DataService {

  private dataUrl = 'https://polar-basin-94875.herokuapp.com/api';  // URL to web API
  constructor(private http: Http) {}

  // Get all Workers
  getWorkers(): Promise<Worker[]> {
    return this.http.get(this.dataUrl + '/workers')
      .toPromise()
      .then(response => response.json().data as Worker[])
      .catch(this.handleError);
  }

  // Create Meeting
  createMeeting(meeting: MeetingDb): Promise<Meeting> {
    return this.http
      .post(this.dataUrl + '/meetings', meeting)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Get all Meetings
  getMeetings(): Promise<Meeting[]> {
    return this.http.get(this.dataUrl + '/meetings')
      .toPromise()
      .then(response => response.json().data as Meeting[])
      .catch(this.handleError);
  }

  // Create Worker
  createWorker(worker: Worker): Promise<Worker> {
    return this.http
      .post(this.dataUrl + '/workers', worker)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Edit Worker
  editWorker(worker: Worker): Promise<Worker> {
    return this.http
      .put(this.dataUrl + '/workers/' + worker.id, worker)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Delete Worker
  deleteWorker(id: number): Promise<void> {
    const url = this.dataUrl + '/workers/' + id;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}