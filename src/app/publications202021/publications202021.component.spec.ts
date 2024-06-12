import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publications202021Component } from './publications202021.component';

describe('Publications202021Component', () => {
  let component: Publications202021Component;
  let fixture: ComponentFixture<Publications202021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publications202021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publications202021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
