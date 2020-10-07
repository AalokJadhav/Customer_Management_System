import { TestBed } from '@angular/core/testing';

import { ToasterServiceService } from './toaster-service.service';

describe('ToasterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterServiceService = TestBed.get(ToasterServiceService);
    expect(service).toBeTruthy();
  });
});
