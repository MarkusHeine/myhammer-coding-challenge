import { HttpService } from "./http.service";
import { Injectable, EventEmitter } from "@angular/core";
import { Jobs } from "../models/jobs.model";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  activeJobs: Jobs[] = [];

  constructor(private getJobs: HttpService) {}

  getData() {
    console.log("getData");
    this.getJobs.getData().subscribe(data => {
      data.body.forEach(job => {
        if (job.state === "active") {
          this.activeJobs.push(job);
        }
      });
    });
    return this.activeJobs;
  }

  getSpecificJob(id: string) {
    this.activeJobs.forEach(job => {
      console.log("job id to show", id);
      if (job.id === id) {
        this.jobSelected.emit(job);
      }
    });
  }

  jobSelected = new EventEmitter<Jobs>();
}
