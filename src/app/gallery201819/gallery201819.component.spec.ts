import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery201819Component } from './gallery201819.component';

describe('Gallery201819Component', () => {
  let component: Gallery201819Component;
  let fixture: ComponentFixture<Gallery201819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery201819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery201819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
