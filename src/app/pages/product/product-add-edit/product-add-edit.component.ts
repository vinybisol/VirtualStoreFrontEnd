import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
})
export class ProductAddEditComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  shortNameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(3),
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(3),
  ]);
  priceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(^\\d*.?\\d{0,2}$)'),
  ]);
  priceMarketFormControl = new FormControl('', [
    Validators.pattern('(^\\d*.?\\d{0,2}$)'),
  ]);
  quantityFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(^\\d*)'),
  ]);
  imageFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(^\\d*)'),
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  goBack(): void {
    this._router.navigate(['product']);
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    console.log('passei aqui');

    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
