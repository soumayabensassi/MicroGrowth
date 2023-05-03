import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsuccesfullComponent } from './downloadsuccesfull.component';

describe('DownloadsuccesfullComponent', () => {
  let component: DownloadsuccesfullComponent;
  let fixture: ComponentFixture<DownloadsuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsuccesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
