import { TestBed } from '@angular/core/testing';

import { KPISouService } from './kpisou.service';

describe('KPISouService', () => {
  let service: KPISouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KPISouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
