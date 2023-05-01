import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAmoCreditComponent } from './tableau-amo-credit.component';

describe('TableauAmoCreditComponent', () => {
  let component: TableauAmoCreditComponent;
  let fixture: ComponentFixture<TableauAmoCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauAmoCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAmoCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
