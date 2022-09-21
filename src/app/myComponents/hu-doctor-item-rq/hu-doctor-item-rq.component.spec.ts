import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDoctorItemRqComponent } from './hu-doctor-item-rq.component';

describe('HuDoctorItemRqComponent', () => {
  let component: HuDoctorItemRqComponent;
  let fixture: ComponentFixture<HuDoctorItemRqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDoctorItemRqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDoctorItemRqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
