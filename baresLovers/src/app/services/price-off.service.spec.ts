import { TestBed } from '@angular/core/testing';

import { PriceOffService } from './price-off.service';

describe('PriceOffService', () => {
  let service: PriceOffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceOffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
