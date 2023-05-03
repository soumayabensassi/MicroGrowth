import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComplaintBackComponent } from './list-complaint-back.component';

describe('ListComplaintBackComponent', () => {
  let component: ListComplaintBackComponent;
  let fixture: ComponentFixture<ListComplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComplaintBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
