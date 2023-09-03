import { TestBed } from '@angular/core/testing';

import { MainBarService } from './main-bar.service';

describe('MainBarService', () => {
  let service: MainBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
