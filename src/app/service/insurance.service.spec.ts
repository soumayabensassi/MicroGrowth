import { TestBed } from '@angular/core/testing';

import { InsuranceServiceService } from './insurance.service';

describe('InsuranceServiceService', () => {
  let service: InsuranceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
