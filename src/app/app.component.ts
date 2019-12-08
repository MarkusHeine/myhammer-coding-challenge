import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Jobs } from "./models/jobs.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  activeJobs: Jobs[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData().subscribe(resp => {
      this.activeJobs = resp.body;
    });
  }
}
