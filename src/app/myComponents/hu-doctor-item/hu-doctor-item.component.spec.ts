import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUDoctorItemComponent } from './hu-doctor-item.component';

describe('HUDoctorItemComponent', () => {
  let component: HUDoctorItemComponent;
  let fixture: ComponentFixture<HUDoctorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUDoctorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUDoctorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
