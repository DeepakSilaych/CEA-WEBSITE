import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publications202324Component } from './publications202324.component';

describe('Publications202324Component', () => {
  let component: Publications202324Component;
  let fixture: ComponentFixture<Publications202324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publications202324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publications202324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
