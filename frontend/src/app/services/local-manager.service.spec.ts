import { TestBed } from '@angular/core/testing';

import { LocalManagerService } from './local-manager.service';

describe('LocalManagerService', () => {
  let service: LocalManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
