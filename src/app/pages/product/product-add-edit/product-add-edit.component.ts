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
import { ActivatedRoute, Router } from '@angular/router';
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
    false
  );
  loading: boolean = false;
  hasImage: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(
    private readonly _route: ActivatedRoute,
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
      image: [this.product.image, null],
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      const paramsRoute: string = params['key'];
      if (paramsRoute && paramsRoute != '0') {
        this.onLoad(paramsRoute);
      }
    });
  }
  goBack(): void {
    this._router.navigate(['product']);
  }
  save() {
    this.loading = true;
    this.buildObject();
    const upload$ = this._productService.store(this.product).subscribe({
      next: (data) => {
        this.saveImages();
      },
      error: (err) => {
        this._snackBar.open('Erro ao salvar os dados', 'Aviso', {
          duration: 3000,
        });
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }
  saveImages(): void {
    this._productService.storeImages(this.product).subscribe({
      next: (data) => {
        this._snackBar.open('Dados salvo com sucesso!!!', 'Sucesso', {
          duration: 3000,
        });
      },
      error: (err) => {
        this._snackBar.open('Erro ao salvar os dados', 'Aviso', {
          duration: 3000,
        });
      },
    });
  }

  onFileSelected(event: Event) {
    if (event && event.target) {
      const element = event.target as HTMLInputElement;
      if (element.files) {
        const files: FileList = element.files;
        this.form.controls['image'].patchValue(files);
        this.form.controls['image'].updateValueAndValidity();
      }
    }
  }

  //#region Metodos Privados
  private onLoad(key: string): void {
    this._productService.getByIdAsync(key).subscribe({
      next: (data) => (this.product = data),
    });
  }
  private buildObject(): void {
    this.product.name = this.form.value.name;
    this.product.shortName = this.form.value.shortName;
    this.product.price = this.form.value.price;
    this.product.priceMarket = this.form.value.priceMarket;
    this.product.note = this.form.value.note;
    this.product.image = this.form.value.image;
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
