import { TestBed } from '@angular/core/testing';

import { FakeBazaSsiPozicijaService } from './fake-baza-ssi-pozicija.service';

describe('FakeBazaSsiPozicijaService', () => {
  let service: FakeBazaSsiPozicijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeBazaSsiPozicijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
