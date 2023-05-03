import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainingBackComponent } from './list-training-back.component';

describe('ListTrainingBackComponent', () => {
  let component: ListTrainingBackComponent;
  let fixture: ComponentFixture<ListTrainingBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrainingBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainingBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
