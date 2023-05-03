import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPacksCreditsComponent } from './list-packs-credits.component';

describe('ListPacksCreditsComponent', () => {
  let component: ListPacksCreditsComponent;
  let fixture: ComponentFixture<ListPacksCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPacksCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPacksCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
