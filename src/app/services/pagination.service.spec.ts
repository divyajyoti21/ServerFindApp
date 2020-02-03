import { TestBed } from '@angular/core/testing';

import { PagerService } from './pagination.service';

describe('PagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagerService = TestBed.get(PagerService);
    expect(service).toBeTruthy();
  });
});
