import { TestBed } from '@angular/core/testing';

import { HarptosService } from './harptos.service';

describe('HarptosService', () => {
  let service: HarptosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarptosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
