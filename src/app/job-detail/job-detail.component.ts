import { Job } from "../models/job.model";
import { Component, OnInit, Input } from "@angular/core";
import { JobsService } from "../services/jobs.service";

@Component({
  selector: "app-job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"]
})
export class JobDetailComponent implements OnInit {
  selectedJob: Job;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.jobSelected.subscribe(data => {
      this.selectedJob = data;
    });
  }
}
