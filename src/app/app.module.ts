import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ActiveJobsComponent } from "./active-jobs/active-jobs.component";
import { JobDetailComponent } from "./job-detail/job-detail.component";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ActiveJobsComponent, JobDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
