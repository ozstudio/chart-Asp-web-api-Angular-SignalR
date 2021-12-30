import { TestBed } from '@angular/core/testing';

import { ServiceSignalRService } from './service-signal-r.service';

describe('ServiceSignalRService', () => {
  let service: ServiceSignalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSignalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
