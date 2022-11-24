import { TestBed } from '@angular/core/testing';

import { IzracunavanjaAlService } from './izracunavanja-al.service';

describe('IzracunavanjaAlService', () => {
  let service: IzracunavanjaAlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzracunavanjaAlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
