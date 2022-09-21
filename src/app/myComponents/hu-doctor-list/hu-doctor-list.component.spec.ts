import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUDoctorListComponent } from './hu-doctor-list.component';

describe('HUDoctorListComponent', () => {
  let component: HUDoctorListComponent;
  let fixture: ComponentFixture<HUDoctorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUDoctorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUDoctorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
