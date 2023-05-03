import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransactionComponent } from './admin-transaction.component';

describe('AdminTransactionComponent', () => {
  let component: AdminTransactionComponent;
  let fixture: ComponentFixture<AdminTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
