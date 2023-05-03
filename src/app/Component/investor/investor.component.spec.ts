/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InvestorComponent } from './investor.component';

describe('InvestorComponent', () => {
  let component: InvestorComponent;
  let fixture: ComponentFixture<InvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
