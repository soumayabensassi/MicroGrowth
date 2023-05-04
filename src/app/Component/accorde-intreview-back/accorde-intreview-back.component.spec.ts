import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeIntreviewBackComponent } from './accorde-intreview-back.component';

describe('AccordeIntreviewBackComponent', () => {
  let component: AccordeIntreviewBackComponent;
  let fixture: ComponentFixture<AccordeIntreviewBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordeIntreviewBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordeIntreviewBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
