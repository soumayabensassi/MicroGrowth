import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditINVComponent } from './edit-inv.component';

describe('EditINVComponent', () => {
  let component: EditINVComponent;
  let fixture: ComponentFixture<EditINVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditINVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditINVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
