import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyCreditsFrontComponent } from './list-my-credits-front.component';

describe('ListMyCreditsFrontComponent', () => {
  let component: ListMyCreditsFrontComponent;
  let fixture: ComponentFixture<ListMyCreditsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMyCreditsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyCreditsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
