import { TestBed } from '@angular/core/testing';

import { Raza2Service } from './raza2.service';

describe('Raza2Service', () => {
  let service: Raza2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Raza2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
