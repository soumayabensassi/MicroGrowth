import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCreditFrontComponent } from './simulation-credit-front.component';

describe('SimulationCreditFrontComponent', () => {
  let component: SimulationCreditFrontComponent;
  let fixture: ComponentFixture<SimulationCreditFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCreditFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationCreditFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
