import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDialogBackComponent } from './hu-dialog-back.component';

describe('HuDialogBackComponent', () => {
  let component: HuDialogBackComponent;
  let fixture: ComponentFixture<HuDialogBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDialogBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDialogBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
