import { Component, OnInit } from "@angular/core";
import { Jobs } from "../models/jobs.model";
import { HttpService } from "../http.service";

@Component({
  selector: "app-active-jobs",
  templateUrl: "./active-jobs.component.html",
  styleUrls: ["./active-jobs.component.css"]
})
export class ActiveJobsComponent implements OnInit {
  activeJobs: Jobs[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData().subscribe(resp => {
      console.log(resp.body);
      this.activeJobs = resp.body;
    });
  }
}
