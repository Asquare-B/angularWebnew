import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuDialogApplicationDetailsComponent } from './hu-dialog-application-details.component';

describe('HuDialogApplicationDetailsComponent', () => {
  let component: HuDialogApplicationDetailsComponent;
  let fixture: ComponentFixture<HuDialogApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuDialogApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuDialogApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
