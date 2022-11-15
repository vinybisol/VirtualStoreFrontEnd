import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../ecommerce/model/product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
})
export class ProductAddEditComponent implements OnInit {
  form: FormGroup;
  product: ProductModel = new ProductModel(
    '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    '',
    '',
    0,
    0,
    '',
    '',
    false,
    [],
    [],
    [],
    [],
    []
  );
  loading: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _productService: ProductService
  ) {
    this.form = this._formBuilder.group({
      shortName: [
        this.product.shortName,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      name: [
        this.product.name,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],

      price: [
        this.product.price,
        [Validators.required, Validators.pattern('(^\\d*.?\\d{0,2}$)')],
      ],
      priceMarket: [
        this.product.priceMarket,
        [Validators.required, Validators.pattern('(^\\d*.?\\d{0,2}$)')],
      ],
      note: [this.product.note, []],
      image1: ['', []],
      imageFormControl2: ['', []],
      imageFormControl3: ['', []],
      imageFormControl4: ['', []],
      imageFormControl5: ['', []],
    });
  }

  ngOnInit(): void {}
  goBack(): void {
    this._router.navigate(['product']);
  }
  save() {
    this._productService.store(this.product).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    let image: any;
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        image = e.target.result;
        this.product.imageTest = new Uint8Array(image);
        console.log('denovo', image);
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
      console.log(reader);
      console.log(reader.result);
      console.log('image', image);
      console.log(this.form.controls['image1'].value);

      this.product.imageTest = image;
    }
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;

    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
