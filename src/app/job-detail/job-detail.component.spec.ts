import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JobDetailComponent } from "./job-detail.component";
import { Job } from "../models/job.model";
import { AppComponent } from "../app.component";
import { ActiveJobsComponent } from "../active-jobs/active-jobs.component";
import { ActiveJobsItemComponent } from "../active-jobs/active-jobs-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "../app.routing";
import { HttpService } from "../services/http.service";
import { JobsService } from "../services/jobs.service";

describe("JobDetailComponent", () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;
  let compiled: any;
  let jobService: JobsService;
  let selectedJob: Job;

  class MockJobsService extends JobsService {
    private job: Job = {
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

    getSpecificJob(id: string) {
      console.log(id);
      this.jobSelected.emit(this.job);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveJobsComponent,
        JobDetailComponent,
        ActiveJobsItemComponent
      ],
      imports: [BrowserModule, HttpClientModule, routing],
      providers: [
        HttpService,
        { provide: JobsService, useClass: MockJobsService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  xdescribe("renders the selected Job", () => {
    it("should render the title correctly", () => {
      console.log("compiled", compiled);
      console.log(component.selectedJob);
      expect(compiled.querySelector(".card-header h6").textContent).toContain(
        "test title"
      );
    });

    xit("should render the description correctly", () => {
      expect(compiled.querySelector(".card-text small").textContent).toContain(
        "test desc"
      );
    });

    xit("should render the amount of unread messages correctly", () => {
      expect(compiled.querySelector(".messages span").textContent).toContain(
        "1"
      );
    });

    xit("should render the amount of attachments correctly", () => {
      expect(compiled.querySelector(".attachments span").textContent).toContain(
        "3"
      );
    });

    xit("should render the the correct item for not awarded jobs", () => {
      expect(compiled.querySelector(".is-awarded i").htmlContent).toContain(
        '<i class="award fa fa-star-o"></i>'
      );
    });
  });
});
