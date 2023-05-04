import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditPackBackComponent } from './list-credit-pack-back.component';

describe('ListCreditPackBackComponent', () => {
  let component: ListCreditPackBackComponent;
  let fixture: ComponentFixture<ListCreditPackBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditPackBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditPackBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
