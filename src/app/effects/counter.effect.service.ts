import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { ProductService } from '../pages/product/product.service';

@Injectable()
export class CounterEffectService {
  counter$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Ecommerce Component] GetAllProducts'),
      mergeMap(() =>
        this._productService.getAllProductWithImagesAsync().pipe(
          map((product) => {
            console.log(product);

            return { type: '[Ecommerce Component] GetAllProducts', product };
          }),
          catchError((erro) => {
            console.log(erro);
            return EMPTY;
          })
        )
      )
    )
  );
  constructor(
    private readonly action$: Actions,
    private readonly _productService: ProductService
  ) {}
}
