import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVCComponent } from './pvc.component';

describe('PVCComponent', () => {
  let component: PVCComponent;
  let fixture: ComponentFixture<PVCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PVCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PVCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
