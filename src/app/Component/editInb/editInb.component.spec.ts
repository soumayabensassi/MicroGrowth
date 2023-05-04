/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditInbComponent } from './editInb.component';

describe('EditInbComponent', () => {
  let component: EditInbComponent;
  let fixture: ComponentFixture<EditInbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
