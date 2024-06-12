import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery201718Component } from './gallery201718.component';

describe('Gallery201718Component', () => {
  let component: Gallery201718Component;
  let fixture: ComponentFixture<Gallery201718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery201718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery201718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
