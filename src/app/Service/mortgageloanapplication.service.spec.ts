import { TestBed } from '@angular/core/testing';

import { MortgageloanapplicationService } from './mortgageloanapplication.service';

describe('MortgageloanapplicationService', () => {
  let service: MortgageloanapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageloanapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
