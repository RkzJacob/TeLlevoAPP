import { TestBed } from '@angular/core/testing';

import { InjectoresService } from './injectores.service';

describe('InjectoresService', () => {
  let service: InjectoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
