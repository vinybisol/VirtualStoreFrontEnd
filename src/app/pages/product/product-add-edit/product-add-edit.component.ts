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
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
    undefined,
    'Produto Teste',
    'Nome curto',
    0,
    0,
    '',
    '',
    false
  );
  loading: boolean = false;
  hasImage1: boolean = false;
  hasImage2: boolean = false;
  hasImage3: boolean = false;
  hasImage4: boolean = false;
  hasImage5: boolean = false;

  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();

  matcher = new MyErrorStateMatcher();
  constructor(
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _productService: ProductService,
    private _snackBar: MatSnackBar
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
      image1: [this.product.image1, null],
      image2: [this.product.image2, null],
      image3: [null],
      image4: [null],
      image5: [null],
    });
  }

  ngOnInit(): void {}
  goBack(): void {
    this._router.navigate(['product']);
  }
  save() {
    this.loading = true;
    this.buildObject();
    const upload$ = this._productService.store(this.product).subscribe({
      next: (data) => {
        console.log(data);
        this.saveImages();
      },
      error: (err) => {
        this._snackBar.open('Erro ao salvar os dados', 'Aviso', {
          duration: 3000,
        });
        this.loading = false;
        console.log('erro', err);
      },
      complete: () => (this.loading = false),
    });
  }
  saveImages(): void {
    this._productService.storeImages(this.product).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this._snackBar.open('Erro ao salvar os dados', 'Aviso', {
          duration: 3000,
        });
        console.log('erro', err);
      },
    });
  }

  onFileSelected(event: Event) {
    if (event && event.target) {
      const element = event.target as HTMLInputElement;
      if (element.files) {
        const file: File = element.files[0];
        const name: string = element.name;
        this.form.controls[name].patchValue(file);
        this.form.controls[name].updateValueAndValidity();
        this.switchIcon(name);
      }
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub.unsubscribe();
  }

  //#region Metodos Privados
  private buildObject(): void {
    this.product.name = this.form.value.name;
    this.product.shortName = this.form.value.shortName;
    this.product.price = this.form.value.price;
    this.product.priceMarket = this.form.value.priceMarket;
    this.product.note = this.form.value.note;
    this.product.image1 = this.form.value.image1;
    this.product.image2 = this.form.value.image2;
    this.product.image3 = this.form.value.image3;
    this.product.image4 = this.form.value.image4;
    this.product.image5 = this.form.value.image5;
  }
  private switchIcon(name: string): void {
    switch (name) {
      case 'image1':
        this.hasImage1 = true;
        break;
      case 'image2':
        this.hasImage2 = true;
        break;
      case 'image3':
        this.hasImage3 = true;
        break;
      case 'image4':
        this.hasImage4 = true;
        break;
      case 'image5':
        this.hasImage5 = true;
        break;
      default:
        break;
    }
  }
  //#endregion
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
