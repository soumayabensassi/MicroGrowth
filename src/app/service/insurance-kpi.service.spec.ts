import { TestBed } from '@angular/core/testing';

import { InsuranceKpiService } from './insurance-kpi.service';

describe('InsuranceKpiService', () => {
  let service: InsuranceKpiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceKpiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
