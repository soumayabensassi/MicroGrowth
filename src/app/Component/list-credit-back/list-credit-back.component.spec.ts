import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreditBackComponent } from './list-credit-back.component';

describe('ListCreditBackComponent', () => {
  let component: ListCreditBackComponent;
  let fixture: ComponentFixture<ListCreditBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCreditBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreditBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
