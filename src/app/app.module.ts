import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ActiveJobsComponent } from "./active-jobs/active-jobs.component";
import { JobDetailComponent } from "./job-detail/job-detail.component";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { ActiveJobsItemComponent } from "./active-jobs/active-jobs-item.component";
import { routing } from "./app.routing";
import { JobsService } from "./services/jobs.service";

@NgModule({
  declarations: [
    AppComponent,
    ActiveJobsComponent,
    JobDetailComponent,
    ActiveJobsItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [HttpService, JobsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
