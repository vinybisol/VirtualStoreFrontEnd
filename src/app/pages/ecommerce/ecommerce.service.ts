import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, Subject } from 'rxjs';
import { CartShoppingModel } from './model/cart-shopping-model';
import { ProductModel } from './model/product-model';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
  private subject = new Subject<CartShoppingModel>();
  private clearCartsubject = new Subject();
  private readonly API: string = '/assets/products.json';
  constructor(private _http: HttpClient) {}

  getAllProductAsync(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.API).pipe(first());
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
