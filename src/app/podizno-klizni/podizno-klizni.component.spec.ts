import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodiznoKlizniComponent } from './podizno-klizni.component';

describe('PodiznoKlizniComponent', () => {
  let component: PodiznoKlizniComponent;
  let fixture: ComponentFixture<PodiznoKlizniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodiznoKlizniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodiznoKlizniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
