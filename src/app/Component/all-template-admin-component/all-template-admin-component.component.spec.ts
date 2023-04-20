import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplateAdminComponentComponent } from './all-template-admin-component.component';

describe('AllTemplateAdminComponentComponent', () => {
  let component: AllTemplateAdminComponentComponent;
  let fixture: ComponentFixture<AllTemplateAdminComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTemplateAdminComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTemplateAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
