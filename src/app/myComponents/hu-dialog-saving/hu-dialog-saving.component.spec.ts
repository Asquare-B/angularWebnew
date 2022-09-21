import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDialogSavingComponent } from './hu-dialog-saving.component';

describe('HuDialogSavingComponent', () => {
  let component: HuDialogSavingComponent;
  let fixture: ComponentFixture<HuDialogSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDialogSavingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDialogSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
