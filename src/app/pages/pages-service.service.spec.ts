import { TestBed } from '@angular/core/testing';

import { PagesServiceService } from './pages-service.service';

describe('PagesServiceService', () => {
  let service: PagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
