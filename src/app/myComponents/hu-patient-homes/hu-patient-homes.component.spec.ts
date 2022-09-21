import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuPatientHomesComponent } from './hu-patient-homes.component';

describe('HuPatientHomesComponent', () => {
  let component: HuPatientHomesComponent;
  let fixture: ComponentFixture<HuPatientHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuPatientHomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuPatientHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
