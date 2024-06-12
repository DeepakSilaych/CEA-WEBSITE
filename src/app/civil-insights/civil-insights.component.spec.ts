import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilInsightsComponent } from './civil-insights.component';

describe('CivilInsightsComponent', () => {
  let component: CivilInsightsComponent;
  let fixture: ComponentFixture<CivilInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
