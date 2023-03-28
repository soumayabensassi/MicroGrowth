import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemdpComponent } from './changemdp.component';

describe('ChangemdpComponent', () => {
  let component: ChangemdpComponent;
  let fixture: ComponentFixture<ChangemdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangemdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
