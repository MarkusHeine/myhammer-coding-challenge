import { JobsService } from "./../services/jobs.service";
import { HttpService } from "./../services/http.service";
import { Component, OnInit } from "@angular/core";
import { Job } from "../models/job.model";

@Component({
  selector: "app-active-jobs",
  templateUrl: "./active-jobs.component.html",
  styleUrls: ["./active-jobs.component.css"]
})
export class ActiveJobsComponent implements OnInit {
  activeJobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.activeJobs = this.jobsService.getData();
  }
}
