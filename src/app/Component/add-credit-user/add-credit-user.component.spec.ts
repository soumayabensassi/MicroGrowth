import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditUserComponent } from './add-credit-user.component';

describe('AddCreditUserComponent', () => {
  let component: AddCreditUserComponent;
  let fixture: ComponentFixture<AddCreditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
