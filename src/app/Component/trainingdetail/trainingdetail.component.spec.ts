import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingdetailComponent } from './trainingdetail.component';

describe('TrainingdetailComponent', () => {
  let component: TrainingdetailComponent;
  let fixture: ComponentFixture<TrainingdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
