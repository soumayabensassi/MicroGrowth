import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfernotallowedComponent } from './transfernotallowed.component';

describe('TransfernotallowedComponent', () => {
  let component: TransfernotallowedComponent;
  let fixture: ComponentFixture<TransfernotallowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfernotallowedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfernotallowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
