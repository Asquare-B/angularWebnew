import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPatientlistComponent } from './as-patientlist.component';

describe('AsPatientlistComponent', () => {
  let component: AsPatientlistComponent;
  let fixture: ComponentFixture<AsPatientlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPatientlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPatientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
