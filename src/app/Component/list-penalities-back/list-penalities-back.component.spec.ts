import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPenalitiesBackComponent } from './list-penalities-back.component';

describe('ListPenalitiesBackComponent', () => {
  let component: ListPenalitiesBackComponent;
  let fixture: ComponentFixture<ListPenalitiesBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPenalitiesBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPenalitiesBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
