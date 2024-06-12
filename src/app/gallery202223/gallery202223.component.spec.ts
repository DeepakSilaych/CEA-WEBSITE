import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery202223Component } from './gallery202223.component';

describe('Gallery202223Component', () => {
  let component: Gallery202223Component;
  let fixture: ComponentFixture<Gallery202223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery202223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery202223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
