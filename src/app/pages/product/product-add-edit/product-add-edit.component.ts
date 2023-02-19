import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { AskDialogComponent } from 'src/app/shared/ask-dialog/ask-dialog.component';

import { ProductModel } from '../../ecommerce/model/product-model';
import { ImageCompressService } from '../image-compress.service';
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
  isEditing: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _formBuilder: FormBuilder,
    private readonly _productService: ProductService,
    private readonly _snackBar: MatSnackBar,
    private readonly _askDialog: MatDialog,
    private readonly compressImage: ImageCompressService
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
      image: [this.product.images],
    });
  }

  ngOnInit(): void {
    this._route.params
      .pipe(
        map((params: any) => params['id']), //pega o params da requsição
        switchMap((key) => {
          if (!key) {
            return of<ProductModel>(this.product);
          }
          this.isEditing = true;
          return this._productService.getByIdAsync(key);
        }) // passa um valor zerado ou pega os dados no servidor
      )
      .subscribe({
        next: (product) => {
          this.product = product;
          this.product.image = [];
          this.updateForm(product);
          this.changeLoadingStatus(false);
        },
        error: () => {
          this.changeLoadingStatus(false);
          this.isEditing = false;
          this.goBack();
        },
      }); // monta os dados no formulario
  }

  goBack(): void {
    this.reset();
    this._router.navigate(['product']);
  }
  onSubmit() {
    this.changeLoadingStatus(true);
    this.buildObject();
    if (this.isEditing) {
      this.update();
    } else {
      this.save();
    }
  }
  onDelete() {
    if (!this.product.id) return;
    const key: string = this.product.id!;

    this.openDialog('deseja excluir?').subscribe({
      next: (canDelete) => {
        if (canDelete) {
          this.changeLoadingStatus(true);
          this.delete(key);
        }
      },
    });
  }

  onFileSelected(event: Event) {
    if (event && event.target) {
      const element = event.target as HTMLInputElement;
      if (element.files) {
        const files: FileList = element.files;
        for (let index = 0; index < files.length; index++) {
          console.log('input change');
          var file = files[index];

          var pattern = /image-*/;
          var reader = new FileReader();

          if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
          }
          reader.onload = this._handleReaderLoaded.bind(this);
          reader.readAsDataURL(file);
        }
      }
    }
  }
  _handleReaderLoaded(e: any) {
    console.log('_handleReaderLoaded');
    var reader = e.target;
    const regex = /data:.*base64,/;
    const string64: string = reader.result.replace(regex, '');
    this.product.photoString.push(string64);
  }

  //#region Metodos Privados
  private buildObject(): void {
    this.product.name = this.form.value.name;
    this.product.shortName = this.form.value.shortName;
    this.product.price = this.form.value.price;
    this.product.priceMarket = this.form.value.priceMarket;
    this.product.note = this.form.value.note;
    this.product.images = this.form.value.image;
  }
  private updateForm(product: ProductModel): void {
    this.form.patchValue({
      name: product.name,
      shortName: product.shortName,
      price: product.price,
      priceMarket: product.priceMarket,
      note: product.note,
      image: product.images,
      key: product.id,
    });
  }
  private changeLoadingStatus(state: boolean): void {
    this.loading = state;
  }

  private reset(): void {
    this.form.reset();
  }
  private save() {
    this._productService
      .store(this.product) //guarda os dados do cadatro no banco de dados
      .pipe(
        take(1),
        switchMap((product: ProductModel) => {
          if (product.id && this.product.image.length > 0) {
            return this.saveImage(product.id); //se deu certo ele envia as imagens para o servidor
          }
          return of(product);
        })
      )
      .subscribe({
        error: (err) => {
          this.onError('Erro ao criar o registro!', err);
        },
        complete: () => {
          this.onSucess('Registro criado com sucesso!');
        },
      });
  }
  private update() {
    const key: string = this.product.id!;
    this._productService
      .updateProductAsync(this.product, key) //guarda os dados do cadatro no banco de dados
      .pipe(
        take(1),
        switchMap(() => {
          if (this.product.image.length > 0) {
            return this.saveImage(key); //se deu certo ele envia as imagens para o servidor
          }
          return of();
        })
      )
      .subscribe({
        error: (err) => {
          this.onError('Erro ao criar o registro!', err);
        },
        complete: () => {
          this.onSucess('Registro atualizado com sucesso!');
        },
      });
  }
  private delete(key: string) {
    this._productService.deleteProductAsync(key).subscribe({
      next: () => {
        this.showMessege('Exluido com sucesso');
        this.goBack();
      },
      error: (error) => {
        this.showMessege('Erro ao deletar os dados', error);
        this.changeLoadingStatus(false);
      },
      complete: () => this.changeLoadingStatus(false),
    });
  }
  private saveImage(key: string): Observable<any> {
    return this._productService.storeImages(this.product, key);
  }
  private openDialog(messege: string): Observable<boolean> {
    return this._askDialog
      .open(AskDialogComponent, { data: messege })
      .afterClosed();
  }
  private showMessege(message: string, error?: any): void {
    this._snackBar.open(message, 'Aviso', {
      duration: 3000,
    });
    console.warn(error);
  }
  private onSucess(messege: string) {
    this.changeLoadingStatus(false);
    this.showMessege(messege);
    this.goBack();
  }
  private onError(message: string, err: any) {
    this.changeLoadingStatus(false);
    this.showMessege(message);
    console.log(err);
    this.goBack();
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
