import { Job } from "./../models/job.model";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ActiveJobsComponent } from "./active-jobs.component";
import { AppComponent } from "../app.component";
import { JobDetailComponent } from "../job-detail/job-detail.component";
import { ActiveJobsItemComponent } from "./active-jobs-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "../app.routing";
import { HttpService } from "../services/http.service";
import { JobsService } from "../services/jobs.service";
import { of } from "rxjs";

const job: Job = {
  id: "1",
  title: "test title",
  zip_code: "10115",
  city: "Berlin",
  thumbnail: "//placekitten.com/150/150",
  attachments: [
    "//placekitten.com/300/200",
    "//placekitten.com/200/400",
    "//placekitten.com/250/250"
  ],
  counter: {
    messages_total: 4,
    messages_unread: 1
  },
  is_awarded: false,
  categories: [
    {
      id: "41"
    },
    {
      id: "58"
    }
  ],
  state: "active",
  description: "test desc",
  end_date: "2018-10-31T14:14:32+01:00",
  created_at: "2018-10-01T14:14:32+02:00"
};

xdescribe("ActiveJobsItemComponent", () => {
  let component: ActiveJobsItemComponent;
  let fixture: ComponentFixture<ActiveJobsItemComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveJobsComponent,
        JobDetailComponent,
        ActiveJobsItemComponent
      ],
      imports: [BrowserModule, HttpClientModule, routing],
      providers: [HttpService, JobsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveJobsItemComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });
});
