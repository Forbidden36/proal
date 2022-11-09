import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALComponent } from './al.component';

describe('ALComponent', () => {
  let component: ALComponent;
  let fixture: ComponentFixture<ALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
