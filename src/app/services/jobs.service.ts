import { HttpService } from "./http.service";
import { Injectable, EventEmitter } from "@angular/core";
import { Job } from "../models/job.model";

type GetData = {
  errno: number;
  error: string;
  body: Job[];
};

@Injectable({
  providedIn: "root"
})
export class JobsService {
  activeJobs: Job[] = [];

  constructor(private getJobs: HttpService) {}

  getData() {
    this.getJobs.getData().subscribe((data: GetData) => {
      console.log(data);
      data.body.forEach((job: Job) => {
        if (job.state === "active") {
          this.activeJobs.push(job);
        }
      });
    });
    return this.activeJobs;
  }

  getSpecificJob(id: string) {
    this.activeJobs.forEach((job: Job) => {
      if (job.id === id) {
        this.jobSelected.emit(job);
      }
    });
  }

  jobSelected = new EventEmitter<Job>();
}
