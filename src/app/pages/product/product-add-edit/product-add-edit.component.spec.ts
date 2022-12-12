import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductAddEditComponent } from './product-add-edit.component';

describe('ProductAddEditComponent', () => {
  let component: ProductAddEditComponent;
  let fixture: ComponentFixture<ProductAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddEditComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
