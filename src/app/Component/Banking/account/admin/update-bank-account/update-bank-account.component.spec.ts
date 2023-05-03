import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBankAccountComponent } from './update-bank-account.component';

describe('UpdateBankAccountComponent', () => {
  let component: UpdateBankAccountComponent;
  let fixture: ComponentFixture<UpdateBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBankAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
