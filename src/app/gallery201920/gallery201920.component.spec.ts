import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery201920Component } from './gallery201920.component';

describe('Gallery201920Component', () => {
  let component: Gallery201920Component;
  let fixture: ComponentFixture<Gallery201920Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery201920Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery201920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
