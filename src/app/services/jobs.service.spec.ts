import { TestBed } from "@angular/core/testing";

import { JobsService } from "./jobs.service";
import { AppComponent } from "../app.component";
import { ActiveJobsComponent } from "../active-jobs/active-jobs.component";
import { JobDetailComponent } from "../job-detail/job-detail.component";
import { ActiveJobsItemComponent } from "../active-jobs/active-jobs-item.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { routing } from "../app.routing";
import { HttpService } from "./http.service";
import { Job } from "../models/job.model";

const allJobs: Job[] = [
  {
    id: "98969442",
    title: "90 m² Dach neu eindecken, Material benötigt",
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
    description:
      "Eum accusata erroribus ei, te usu homero nostrud. Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-10-31T14:14:32+01:00",
    created_at: "2018-10-01T14:14:32+02:00"
  },
  {
    id: "68934444",
    title: "2 Scheiben in Altbau-Balkontür austauschen",
    zip_code: "10115",
    city: "Berlin",
    thumbnail: "//placekitten.com/150/150",
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 0
    },
    is_awarded: false,
    categories: [
      {
        id: "33"
      }
    ],
    state: "active",
    description:
      "Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-11-28T16:10:02+01:00",
    created_at: "2018-10-11T04:14:32+02:00"
  },
  {
    id: "38934412",
    title: "15 Holz- Altbau Türen weiß-matt lackieren.",
    zip_code: "10115",
    city: "Berlin",
    thumbnail: "//placekitten.com/150/150",
    attachments: [
      "//placekitten.com/335/400",
      "//placekitten.com/150/400",
      "//placekitten.com/250/350"
    ],
    counter: {
      messages_total: 10,
      messages_unread: 2
    },
    is_awarded: false,
    categories: [],
    state: "inactive",
    description:
      "Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-09-14T08:30:45+01:00",
    created_at: "2018-08-11T14:14:32+02:00"
  },
  {
    id: "8969556",
    title: "Wöchentliche Renigung eines Hauses",
    zip_code: "10115",
    city: "Berlin",
    thumbnail: "//placekitten.com/150/150",
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 1
    },
    is_awarded: true,
    categories: [
      {
        id: "14"
      }
    ],
    state: "active",
    description:
      "Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-10-31T14:14:32+01:00",
    created_at: "2018-10-01T14:14:32+02:00"
  }
];

const activeJobs: Job[] = [
  {
    id: "98969442",
    title: "90 m² Dach neu eindecken, Material benötigt",
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
    description:
      "Eum accusata erroribus ei, te usu homero nostrud. Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-10-31T14:14:32+01:00",
    created_at: "2018-10-01T14:14:32+02:00"
  },
  {
    id: "68934444",
    title: "2 Scheiben in Altbau-Balkontür austauschen",
    zip_code: "10115",
    city: "Berlin",
    thumbnail: "//placekitten.com/150/150",
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 0
    },
    is_awarded: false,
    categories: [
      {
        id: "33"
      }
    ],
    state: "active",
    description:
      "Ei vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei.\r\n\r\nEum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-11-28T16:10:02+01:00",
    created_at: "2018-10-11T04:14:32+02:00"
  },
  {
    id: "8969556",
    title: "Wöchentliche Renigung eines Hauses",
    zip_code: "10115",
    city: "Berlin",
    thumbnail: "//placekitten.com/150/150",
    attachments: [],
    counter: {
      messages_total: 1,
      messages_unread: 1
    },
    is_awarded: true,
    categories: [
      {
        id: "14"
      }
    ],
    state: "active",
    description:
      "Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
    end_date: "2018-10-31T14:14:32+01:00",
    created_at: "2018-10-01T14:14:32+02:00"
  }
];

const singleJob: Job = {
  id: "98969442",
  title: "90 m² Dach neu eindecken, Material benötigt",
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
  description:
    "Eum accusata erroribus ei, te usu homero nostrud. Sed te tractatos dissentiet, id saperet luptatum forensibus est. His idque tibique periculis ut, quis principes consulatu ad per. Impedit periculis voluptaria mel eu, periculis intellegat incorrupte his an, ex vis adhuc saepe habemus.\r\n\r\n\r\nEi vel exerci eripuit apeirian. Mei ei partiendo consetetur honestatis. Eam et percipit argumentum. Indoctum sapientem nec ut, ea vel wisi equidem. Pro meliore elaboraret no. Habemus contentiones ne vix, simul audire pro at, ludus vidisse ei mei. Eum alia concludaturque cu, nam veri utinam ea. No cetero commune placerat nam.",
  end_date: "2018-10-31T14:14:32+01:00",
  created_at: "2018-10-01T14:14:32+02:00"
};

xdescribe("JobsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActiveJobsComponent,
        JobDetailComponent,
        ActiveJobsItemComponent
      ],
      imports: [BrowserModule, HttpClientModule, routing],
      providers: [HttpService, JobsService]
    })
  );

  xit("should be created", () => {
    const service: JobsService = TestBed.get(JobsService);
    expect(service).toBeTruthy();
  });

  xdescribe("getData", () => {
    it("should return a collection of active jobs", () => {
      let response: Job[];
      const service: JobsService = TestBed.get(JobsService);
    });
  });

  xdescribe("getSpecificJob", () => {
    it("should emit the Job with the correct Id", () => {
      const service: JobsService = TestBed.get(JobsService);
      let response: Job;

      service.getSpecificJob("98969442");

      spyOn(service.jobSelected, "emit");

      expect(service.jobSelected.emit).toEqual(singleJob);
    });
  });
});
