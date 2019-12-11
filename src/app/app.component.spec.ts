import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ActiveJobsComponent } from "./active-jobs/active-jobs.component";

xdescribe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;

  it("should create the app", () => {
    expect(app).toBeDefined();
  });

  it(`should have as title 'myhammer-coding-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("myhammer-coding-challenge");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".content span").textContent).toContain(
      "myhammer-coding-challenge app is running!"
    );
  });
});
