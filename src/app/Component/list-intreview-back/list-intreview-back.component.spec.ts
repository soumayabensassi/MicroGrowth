import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIntreviewBackComponent } from './list-intreview-back.component';

describe('ListIntreviewBackComponent', () => {
  let component: ListIntreviewBackComponent;
  let fixture: ComponentFixture<ListIntreviewBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIntreviewBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIntreviewBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
