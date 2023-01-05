import { Action, createAction, props } from '@ngrx/store';
import { ProductModel } from '../pages/ecommerce/model/product-model';

export const getAllProducts1 = createAction(
  '[Ecommerce Component] GetAllProducts',
  props<ProductModel>
);

export const getAllProducts = () => {
  return <Action>{ type: '', product: {} };
};

export interface getAction {
  type: string;
  product: ProductModel;
}
