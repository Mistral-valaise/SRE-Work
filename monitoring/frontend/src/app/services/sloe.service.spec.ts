import { TestBed } from '@angular/core/testing';

import { SloeService } from './sloe.service';

describe('SloeService', () => {
  let service: SloeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SloeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
