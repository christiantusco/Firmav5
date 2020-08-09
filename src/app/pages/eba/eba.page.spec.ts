import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbaPage } from './eba.page';

describe('EbaPage', () => {
  let component: EbaPage;
  let fixture: ComponentFixture<EbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
