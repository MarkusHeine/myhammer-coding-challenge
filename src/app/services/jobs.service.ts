import { HttpService } from "./http.service";
import { Injectable, EventEmitter } from "@angular/core";
import { Jobs } from "../models/jobs.model";

type GetData = {
  errno: number;
  error: string;
  body: Jobs[];
};

@Injectable({
  providedIn: "root"
})
export class JobsService {
  activeJobs: Jobs[] = [];

  constructor(private getJobs: HttpService) {}

  getData() {
    this.getJobs.getData().subscribe((data: GetData) => {
      console.log(data);
      data.body.forEach((job: Jobs) => {
        if (job.state === "active") {
          this.activeJobs.push(job);
        }
      });
    });
    return this.activeJobs;
  }

  getSpecificJob(id: string) {
    this.activeJobs.forEach((job: Jobs) => {
      if (job.id === id) {
        this.jobSelected.emit(job);
      }
    });
  }

  jobSelected = new EventEmitter<Jobs>();
}
