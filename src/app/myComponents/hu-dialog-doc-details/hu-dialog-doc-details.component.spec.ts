import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDialogDocDetailsComponent } from './hu-dialog-doc-details.component';

describe('HuDialogDocDetailsComponent', () => {
  let component: HuDialogDocDetailsComponent;
  let fixture: ComponentFixture<HuDialogDocDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDialogDocDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDialogDocDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
