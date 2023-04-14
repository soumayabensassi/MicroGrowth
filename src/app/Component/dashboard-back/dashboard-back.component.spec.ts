import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBACKComponent } from './dashboard-back.component';

describe('DashboardBACKComponent', () => {
  let component: DashboardBACKComponent;
  let fixture: ComponentFixture<DashboardBACKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBACKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
