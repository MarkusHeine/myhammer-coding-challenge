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

describe("ActiveJobsComponent", () => {
  let fixture: ComponentFixture<ActiveJobsComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveJobsComponent, ActiveJobsItemComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveJobsComponent);
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it("headline should be 'active Jobs'", () => {
    expect(compiled.querySelector(".list-group h3").textContent).toContain(
      "active Jobs"
    );
  });
});
