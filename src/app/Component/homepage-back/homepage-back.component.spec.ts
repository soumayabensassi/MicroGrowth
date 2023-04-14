import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBACKComponent } from './homepage-back.component';

describe('HomepageBACKComponent', () => {
  let component: HomepageBACKComponent;
  let fixture: ComponentFixture<HomepageBACKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBACKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBACKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
