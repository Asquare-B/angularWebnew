import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDoctordetailsComponent } from './as-doctordetails.component';

describe('AsDoctordetailsComponent', () => {
  let component: AsDoctordetailsComponent;
  let fixture: ComponentFixture<AsDoctordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDoctordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsDoctordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
