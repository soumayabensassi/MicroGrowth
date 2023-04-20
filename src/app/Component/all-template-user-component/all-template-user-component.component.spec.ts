import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTemplateUserComponentComponent } from './all-template-user-component.component';

describe('AllTemplateUserComponentComponent', () => {
  let component: AllTemplateUserComponentComponent;
  let fixture: ComponentFixture<AllTemplateUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTemplateUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTemplateUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
