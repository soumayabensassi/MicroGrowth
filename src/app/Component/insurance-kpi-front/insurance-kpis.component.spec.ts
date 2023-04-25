import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceKpisComponent } from './insurance-kpis.component';

describe('InsuranceKpisComponent', () => {
  let component: InsuranceKpisComponent;
  let fixture: ComponentFixture<InsuranceKpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceKpisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
