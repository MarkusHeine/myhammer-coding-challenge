import { JobsService } from "./../services/jobs.service";
import { Job } from "../models/job.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-active-jobs-item",
  templateUrl: "./active-jobs-item.component.html"
})
export class ActiveJobsItemComponent {
  @Input() activeJob: Job;

  constructor(private jobsService: JobsService) {}

  showJob = (id: string) => {
    this.jobsService.getSpecificJob(id);
  };
}
