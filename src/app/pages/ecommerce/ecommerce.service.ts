import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartShoppingModel } from './model/cart-shopping-model';
import { ProductModel } from './model/product-model';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  private subject = new Subject<CartShoppingModel>();
  private clearCartsubject = new Subject();
  constructor() {}

  getAllProductAsync(): ProductModel[] {
    return [
      {
        position: 1,
        fullName: 'Roteador Completo',
        name: 'Roteador',
        price: 1.0,
        marketPrice: 2,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
      {
        position: 2,
        fullName: 'Espingarda de pressão',
        name: 'CBC nitro 900',
        price: 500,
        marketPrice: 900,
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
        obs: 'esse produto é vendido no combo',
        inCart: false,
      },
    ];
  }
  sendCartShopping(cart: CartShoppingModel): void {
    this.subject.next(cart);
  }
  getCartShopping(): Subject<CartShoppingModel> {
    return this.subject;
  }
  sendClearCartShoppingTotal() {
    this.clearCartsubject.next([]);
  }
  getClearCartShoppingTotal() {
    return this.clearCartsubject;
  }
}