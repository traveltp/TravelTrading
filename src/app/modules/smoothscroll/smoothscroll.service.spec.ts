import { TestBed, inject } from '@angular/core/testing';

import { SmoothscrollService } from './smoothscroll.service';

describe('SmoothscrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmoothscrollService]
    });
  });

  it('should be created', inject([SmoothscrollService], (service: SmoothscrollService) => {
    expect(service).toBeTruthy();
  }));
});
