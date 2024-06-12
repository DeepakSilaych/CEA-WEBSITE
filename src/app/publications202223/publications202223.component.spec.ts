import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publications202223Component } from './publications202223.component';

describe('Publications202223Component', () => {
  let component: Publications202223Component;
  let fixture: ComponentFixture<Publications202223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publications202223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publications202223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
