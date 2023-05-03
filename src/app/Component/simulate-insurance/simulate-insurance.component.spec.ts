import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateInsuranceComponent } from './simulate-insurance.component';

describe('SimulateInsuranceComponent', () => {
  let component: SimulateInsuranceComponent;
  let fixture: ComponentFixture<SimulateInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
