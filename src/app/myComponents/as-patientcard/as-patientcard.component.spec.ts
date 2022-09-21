import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPatientcardComponent } from './as-patientcard.component';

describe('AsPatientcardComponent', () => {
  let component: AsPatientcardComponent;
  let fixture: ComponentFixture<AsPatientcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPatientcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsPatientcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
