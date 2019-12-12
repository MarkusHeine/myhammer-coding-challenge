import { JobsService } from "./../services/jobs.service";
import { Component, OnInit } from "@angular/core";
import { Job } from "../models/job.model";

@Component({
  selector: "app-active-jobs",
  templateUrl: "./active-jobs.component.html"
})
export class ActiveJobsComponent implements OnInit {
  activeJobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.activeJobs = this.jobsService.getJobData();
  }
}
