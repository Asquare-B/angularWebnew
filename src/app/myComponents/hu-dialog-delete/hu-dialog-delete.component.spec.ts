import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDialogDeleteComponent } from './hu-dialog-delete.component';

describe('HuDialogDeleteComponent', () => {
  let component: HuDialogDeleteComponent;
  let fixture: ComponentFixture<HuDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDialogDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
