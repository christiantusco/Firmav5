import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegioPage } from './colegio.page';

describe('ColegioPage', () => {
  let component: ColegioPage;
  let fixture: ComponentFixture<ColegioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColegioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
