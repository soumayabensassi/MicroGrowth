import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditPackDemandeComponent } from './list-credit-pack-demande.component';

describe('ListCreditPackDemandeComponent', () => {
  let component: ListCreditPackDemandeComponent;
  let fixture: ComponentFixture<ListCreditPackDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditPackDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditPackDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
