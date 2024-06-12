import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publications201920Component } from './publications201920.component';

describe('Publications201920Component', () => {
  let component: Publications201920Component;
  let fixture: ComponentFixture<Publications201920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publications201920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publications201920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
