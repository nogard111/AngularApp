import { TestBed, inject } from '@angular/core/testing';

import { BreadCrumbHelperService } from './bread-crumb-helper.service';

describe('BreadCrumbHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreadCrumbHelperService]
    });
  });

  it('should be created', inject([BreadCrumbHelperService], (service: BreadCrumbHelperService) => {
    expect(service).toBeTruthy();
  }));
});
