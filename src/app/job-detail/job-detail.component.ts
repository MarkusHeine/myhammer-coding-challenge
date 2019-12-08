import { Jobs } from "./../models/jobs.model";
import { Component, OnInit, Input } from "@angular/core";
import { JobsService } from "../services/jobs.service";

@Component({
  selector: "app-job-detail",
  templateUrl: "./job-detail.component.html",
  styleUrls: ["./job-detail.component.css"]
})
export class JobDetailComponent implements OnInit {
  selectedJob: Jobs;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.jobSelected.subscribe(data => {
      this.selectedJob = data;
    });
  }
}
