import { logging } from "protractor";
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
  attachments: number;
  isAwarded: boolean;

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.jobsService.jobSelected.subscribe((data: Job) => {
      this.selectedJob = data;
      this.attachments = data.attachments.length;
      this.isAwarded = data.is_awarded;
    });
  }
}
