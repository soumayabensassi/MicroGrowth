import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvestmentBackComponent } from './list-investment-back.component';

describe('ListInvestmentBackComponent', () => {
  let component: ListInvestmentBackComponent;
  let fixture: ComponentFixture<ListInvestmentBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvestmentBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvestmentBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
