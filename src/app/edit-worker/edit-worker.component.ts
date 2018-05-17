import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from '../data-service.service';

import { Worker } from "../models/worker";

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent {
  @Input() worker: Worker;
  editWorker = new Worker;
 
  constructor(private dataService: DataService) { }
 
  onEditWorker(): void {
    this.editWorker.id = this.worker.id;
    this.dataService.editWorker(this.editWorker).then(() => window.location.reload());
  }
}
