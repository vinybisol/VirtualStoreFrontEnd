import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartShoppingModel } from './model/cart-shopping-model';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  private subject = new Subject<CartShoppingModel>();
  private clearCartsubject = new Subject();
  private readonly API: string = '/assets/products.json';
  constructor() {}

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
