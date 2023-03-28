import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeCompteComponent } from './confirme-compte.component';

describe('ConfirmeCompteComponent', () => {
  let component: ConfirmeCompteComponent;
  let fixture: ComponentFixture<ConfirmeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmeCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
