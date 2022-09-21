import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsNavbarSideComponent } from './as-navbar-side.component';

describe('AsNavbarSideComponent', () => {
  let component: AsNavbarSideComponent;
  let fixture: ComponentFixture<AsNavbarSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsNavbarSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsNavbarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
