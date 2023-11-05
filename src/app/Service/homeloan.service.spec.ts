import { TestBed } from '@angular/core/testing';

import { HomeloanService } from './homeloan.service';

describe('HomeloanService', () => {
  let service: HomeloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
