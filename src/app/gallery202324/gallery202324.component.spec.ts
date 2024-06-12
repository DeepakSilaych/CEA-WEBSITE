import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery202324Component } from './gallery202324.component';

describe('Gallery202223Component', () => {
  let component: Gallery202324Component;
  let fixture: ComponentFixture<Gallery202324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery202324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery202324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
