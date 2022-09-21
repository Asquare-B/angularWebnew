import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUEmergencyComponent } from './hu-emergency.component';

describe('HUEmergencyComponent', () => {
  let component: HUEmergencyComponent;
  let fixture: ComponentFixture<HUEmergencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HUEmergencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HUEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
