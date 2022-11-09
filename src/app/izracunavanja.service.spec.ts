import { TestBed } from '@angular/core/testing';

import { IzracunavanjaService } from './izracunavanja.service';

describe('IzracunavanjaService', () => {
  let service: IzracunavanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzracunavanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
