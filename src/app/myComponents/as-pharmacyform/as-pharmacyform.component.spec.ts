import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPharmacyformComponent } from './as-pharmacyform.component';

describe('AsPharmacyformComponent', () => {
  let component: AsPharmacyformComponent;
  let fixture: ComponentFixture<AsPharmacyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPharmacyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPharmacyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
