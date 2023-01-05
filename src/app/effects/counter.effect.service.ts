import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as fromActions from '../actions/counter';
import { ProductService } from '../pages/product/product.service';

@Injectable()
export class CounterEffectService {
  counter$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromActions.getAllProducts),
      switchMap(() =>
        this._productService.getAllProductWithImagesAsync().pipe(
          map((data) => {
            console.log(data);

            return fromActions.getAllProductsSuccess({ product: data });
          }),
          catchError((error) => {
            console.log(error);
            return of(fromActions.getAllProductsSuccess({ product: [] }));
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
