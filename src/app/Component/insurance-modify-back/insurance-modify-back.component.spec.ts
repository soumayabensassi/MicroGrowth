import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceModifyBackComponent } from './insurance-modify-back.component';

describe('InsuranceModifyBackComponent', () => {
  let component: InsuranceModifyBackComponent;
  let fixture: ComponentFixture<InsuranceModifyBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceModifyBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceModifyBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
