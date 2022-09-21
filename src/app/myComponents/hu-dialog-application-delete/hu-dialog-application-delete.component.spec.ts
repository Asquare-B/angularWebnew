import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDialogApplicationDeleteComponent } from './hu-dialog-application-delete.component';

describe('HuDialogApplicationDeleteComponent', () => {
  let component: HuDialogApplicationDeleteComponent;
  let fixture: ComponentFixture<HuDialogApplicationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDialogApplicationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDialogApplicationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
