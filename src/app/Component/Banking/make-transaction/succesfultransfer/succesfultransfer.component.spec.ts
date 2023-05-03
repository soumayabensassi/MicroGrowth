import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfultransferComponent } from './succesfultransfer.component';

describe('SuccesfultransferComponent', () => {
  let component: SuccesfultransferComponent;
  let fixture: ComponentFixture<SuccesfultransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfultransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfultransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
