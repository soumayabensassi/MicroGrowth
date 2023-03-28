import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritemsgComponent } from './writemsg.component';

describe('WritemsgComponent', () => {
  let component: WritemsgComponent;
  let fixture: ComponentFixture<WritemsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritemsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritemsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
