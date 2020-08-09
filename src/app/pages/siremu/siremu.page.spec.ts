import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiremuPage } from './siremu.page';

describe('SiremuPage', () => {
  let component: SiremuPage;
  let fixture: ComponentFixture<SiremuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiremuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiremuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
