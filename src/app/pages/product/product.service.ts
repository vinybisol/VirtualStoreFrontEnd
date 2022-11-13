import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { ProductModel } from '../ecommerce/model/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API: string = '/assets/products.json';

  constructor(private readonly _http: HttpClient) {}

  getAllProductAsync(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.API).pipe(first());
  }
}
