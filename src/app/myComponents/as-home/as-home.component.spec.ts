import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsHomeComponent } from './as-home.component';

describe('AsHomeComponent', () => {
  let component: AsHomeComponent;
  let fixture: ComponentFixture<AsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
