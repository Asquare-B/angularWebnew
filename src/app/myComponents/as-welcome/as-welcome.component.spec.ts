import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsWelcomeComponent } from './as-welcome.component';

describe('AsWelcomeComponent', () => {
  let component: AsWelcomeComponent;
  let fixture: ComponentFixture<AsWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
