import { createReducer, on } from '@ngrx/store';
import * as fromActions from '../actions/counter';
import { ProductModel } from '../pages/ecommerce/model/product-model';

export const initialState: ArticleState = { products: [], message: '' };

export const counterReducer = createReducer(
  initialState,
  on(fromActions.getAllProductsSuccess, (state, { product }) => ({
    products: product,
    message: 'Success',
  }))
);
export interface AppState {
  articleState: ArticleState;
}

export interface ArticleState {
  products: ProductModel[];
  message: any;
}
