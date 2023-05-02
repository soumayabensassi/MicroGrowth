import { TestBed } from '@angular/core/testing';

import { ActivitysectorService } from './activitysector.service';

describe('ActivitysectorService', () => {
  let service: ActivitysectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitysectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
