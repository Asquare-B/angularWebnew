import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDoctorcardComponent } from './as-doctorcard.component';

describe('AsDoctorcardComponent', () => {
  let component: AsDoctorcardComponent;
  let fixture: ComponentFixture<AsDoctorcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDoctorcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsDoctorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
