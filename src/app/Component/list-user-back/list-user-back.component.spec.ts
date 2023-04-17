import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserBACKComponent } from './list-user-back.component';

describe('ListUserBACKComponent', () => {
  let component: ListUserBACKComponent;
  let fixture: ComponentFixture<ListUserBACKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserBACKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserBACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
