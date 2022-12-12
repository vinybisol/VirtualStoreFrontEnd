import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AskDialogComponent } from './ask-dialog.component';

describe('AskDialogComponent', () => {
  let component: AskDialogComponent;
  let fixture: ComponentFixture<AskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
      declarations: [AskDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
