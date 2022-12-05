import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { ProductModel } from '../../ecommerce/model/product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products$: Observable<ProductModel[]>;
  displayedColumns: string[] = ['name', 'price'];

  constructor(
    private readonly _productService: ProductService,
    private readonly _activeRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _dialog: MatDialog
  ) {
    this.products$ = this._productService.getAllProductAsync().pipe(
      catchError(() => {
        this.openDialog('Erro ao carregar os produtos');
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onAdd(): void {
    this._router.navigate(['new']);
  }
  onEdit(product: any) {
    this._router.navigate(['edit', product.key], {
      relativeTo: this._activeRoute,
    });
  }
  openDialog(messege: string) {
    this._dialog.open(ErrorDialogComponent, {
      data: messege,
    });
  }
}
