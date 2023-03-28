import { TestBed } from '@angular/core/testing';

import { ConfirmeCompteService } from './confirme-compte.service';

describe('ConfirmeCompteService', () => {
  let service: ConfirmeCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmeCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
