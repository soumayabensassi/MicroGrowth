import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceKpiBackComponent } from './insurance-kpi-back.component';

describe('InsuranceKpiBackComponent', () => {
  let component: InsuranceKpiBackComponent;
  let fixture: ComponentFixture<InsuranceKpiBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceKpiBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceKpiBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
