import { JobsService } from "./../services/jobs.service";
import { Jobs } from "./../models/jobs.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-active-jobs-item",
  templateUrl: "./active-jobs-item.component.html",
  styleUrls: ["./active-jobs-item.component.css"]
})
export class ActiveJobsItemComponent {
  @Input() activeJob: Jobs;

  constructor(private jobsService: JobsService) {}

  showJob(id) {
    this.jobsService.getSpecificJob(id);
  }
}
