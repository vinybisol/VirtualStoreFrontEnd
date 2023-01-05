import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../pages/ecommerce/model/product-model';

export const getAllProducts = createAction(
  '[Ecommerce Component] GetAllProducts'
);
export const getAllProductsSuccess = createAction(
  '[Ecommerce Component] GetAllProductsSuccess',
  props<{ product: ProductModel[] }>()
);

export interface getAction {
  type: string;
  product: ProductModel;
}
