import { JobsService } from "./../services/jobs.service";
import { HttpService } from "./../services/http.service";
import { Component, OnInit } from "@angular/core";
import { Jobs } from "../models/jobs.model";

@Component({
  selector: "app-active-jobs",
  templateUrl: "./active-jobs.component.html",
  styleUrls: ["./active-jobs.component.css"]
})
export class ActiveJobsComponent implements OnInit {
  activeJobs: Jobs[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.activeJobs = this.jobsService.getData();
  }
}
