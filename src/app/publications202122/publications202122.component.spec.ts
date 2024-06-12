import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publications202122Component } from './publications202122.component';

describe('Publications202122Component', () => {
  let component: Publications202122Component;
  let fixture: ComponentFixture<Publications202122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publications202122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publications202122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
