import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUDoctorFormComponent } from './hu-doctor-form.component';

describe('HUDoctorFormComponent', () => {
  let component: HUDoctorFormComponent;
  let fixture: ComponentFixture<HUDoctorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUDoctorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUDoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
