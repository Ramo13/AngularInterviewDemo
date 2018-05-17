import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  workers: Worker[];
  selectedWorker: Worker;
  newWorker = new Worker;

  constructor(private dataService: DataService) { }

  getWorkers() {
    this.dataService.getWorkers().then(workers => this.workers = workers);
  }

  ngOnInit(): void {
    this.getWorkers();
  }

  onSelect(selectedWorker: Worker): void {
    this.selectedWorker = selectedWorker;
  }

  onAddNew(): void {
    this.dataService.createWorker(this.newWorker).then(() => window.location.reload());
  }

  deleteWorker(id: number): void {
    this.dataService.deleteWorker(id).then(() => this.removeUser(id));
  }

  removeUser(id): void{
    this.workers.forEach(worker => {
      if (worker.id == id) { 
        var index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
      }
    });
  }
}
