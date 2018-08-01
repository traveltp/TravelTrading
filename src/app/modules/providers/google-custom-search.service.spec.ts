import { TestBed, inject } from '@angular/core/testing';

import { GoogleCustomSearchService } from './google-custom-search.service';

describe('GoogleCustomSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleCustomSearchService]
    });
  });

  it('should be created', inject([GoogleCustomSearchService], (service: GoogleCustomSearchService) => {
    expect(service).toBeTruthy();
  }));
});
