import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery202122Component } from './gallery202122.component';

describe('Gallery202122Component', () => {
  let component: Gallery202122Component;
  let fixture: ComponentFixture<Gallery202122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery202122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery202122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
