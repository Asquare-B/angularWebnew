import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsLoginComponent } from './as-login.component';

describe('AsLoginComponent', () => {
  let component: AsLoginComponent;
  let fixture: ComponentFixture<AsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
