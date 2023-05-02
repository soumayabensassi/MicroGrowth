import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceShowBackComponent } from './insurance-show-back.component';

describe('InsuranceShowBackComponent', () => {
  let component: InsuranceShowBackComponent;
  let fixture: ComponentFixture<InsuranceShowBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceShowBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceShowBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
