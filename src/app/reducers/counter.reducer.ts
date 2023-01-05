import { createReducer, on } from '@ngrx/store';
import { getAllProducts } from '../actions/counter';
import { ProductModel } from '../pages/ecommerce/model/product-model';

export const initialState: ProductModel[] = [
  new ProductModel(),
  new ProductModel(),
];

export const counterReducer = createReducer(
  initialState,
  on(getAllProducts, (state, product) => {
    console.log(state);
    console.log(product.type);
    return product;
  })
);
