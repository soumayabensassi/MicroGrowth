import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublictaionBACKComponent } from './list-publictaion-back.component';

describe('ListPublictaionBACKComponent', () => {
  let component: ListPublictaionBACKComponent;
  let fixture: ComponentFixture<ListPublictaionBACKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublictaionBACKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublictaionBACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
