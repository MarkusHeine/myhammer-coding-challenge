import { Routes, RouterModule } from "@angular/router";
import { ActiveJobsComponent } from "./active-jobs/active-jobs.component";
import { ActiveJobsItemComponent } from "./active-jobs/active-jobs-item.component";

const APP_ROUTES: Routes = [{ path: "", component: ActiveJobsComponent }];

export const routing = RouterModule.forRoot(APP_ROUTES);
