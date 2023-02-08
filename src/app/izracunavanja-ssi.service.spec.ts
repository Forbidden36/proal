import { TestBed } from '@angular/core/testing';

import { IzracunavanjaSSIService } from './izracunavanja-ssi.service';

describe('IzracunavanjaSSIService', () => {
  let service: IzracunavanjaSSIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzracunavanjaSSIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
