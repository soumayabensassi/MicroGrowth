import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditAdminComponent } from './add-credit-admin.component';

describe('AddCreditAdminComponent', () => {
  let component: AddCreditAdminComponent;
  let fixture: ComponentFixture<AddCreditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
