import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetsBackComponent } from './list-projets-back.component';

describe('ListProjetsBackComponent', () => {
  let component: ListProjetsBackComponent;
  let fixture: ComponentFixture<ListProjetsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjetsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjetsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
