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
import { map, of, switchMap } from 'rxjs';
import { ProductModel } from '../../ecommerce/model/product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
})
export class ProductAddEditComponent implements OnInit {
  form: FormGroup;
  product: ProductModel = new ProductModel();
  loading: boolean = true;
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
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],
      name: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
        ],
      ],

      price: [
        null,
        [Validators.required, Validators.pattern('(^\\d*.?\\d{0,2}$)')],
      ],
      priceMarket: [
        this.product.priceMarket,
        [Validators.required, Validators.pattern('(^\\d*.?\\d{0,2}$)')],
      ],
      note: [this.product.note],
      image: [this.product.image],
    });
  }

  ngOnInit(): void {
    this._route.params
      .pipe(
        map((params: any) => params['key']), //pega o params da requsição
        switchMap((key) => {
          if (!key) {
            return of<ProductModel>(this.product);
          }
          return this._productService.getByIdAsync(key);
        }) // passa um valor zerado ou pega os dados no servidor
      )
      .subscribe({
        next: (product) => {
          this.updateForm(product);
          this.changeLoadingStatus(false);
        },
        error: () => this.changeLoadingStatus(false),
      }); // monta os dados no formulario
  }

  goBack(): void {
    this.reset();
    this._router.navigate(['product']);
  }
  onSubmit() {
    this.changeLoadingStatus(true);
    this.buildObject();
    this._productService.store(this.product).subscribe({
      next: (data: ProductModel) => {
        this.saveImages(data.key!);
        this.goBack();
      },
      error: (err) => {
        this._snackBar.open('Erro ao salvar os dados', 'Aviso', {
          duration: 3000,
        });
        this.changeLoadingStatus(false);
      },
      complete: () => this.changeLoadingStatus(false),
    });
  }
  saveImages(key: string): void {
    this._productService.storeImages(this.product, key).subscribe({
      next: (data) => {
        this._snackBar.open('Dados salvo com sucesso!!!', 'Sucesso', {
          duration: 3000,
        });
      },
      error: (err) => {
        console.warn(err);
        this._snackBar.open('Erro ao salvar os dados', 'Aviso', {
          duration: 3000,
        });
      },
      complete: () => this.goBack(),
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
  private buildObject(): void {
    this.product.name = this.form.value.name;
    this.product.shortName = this.form.value.shortName;
    this.product.price = this.form.value.price;
    this.product.priceMarket = this.form.value.priceMarket;
    this.product.note = this.form.value.note;
    this.product.image = this.form.value.image;
  }
  private updateForm(product: ProductModel): void {
    this.form.patchValue({
      name: product.name,
      shortName: product.shortName,
      price: product.price,
      priceMarket: product.priceMarket,
      note: product.note,
      image: product.image,
    });
  }
  private changeLoadingStatus(state: boolean): void {
    this.loading = state;
  }

  private reset(): void {
    this.form.reset();
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
