import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditDetailsFrontComponent } from './credit-details-front.component';

describe('CreditDetailsFrontComponent', () => {
  let component: CreditDetailsFrontComponent;
  let fixture: ComponentFixture<CreditDetailsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditDetailsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditDetailsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
