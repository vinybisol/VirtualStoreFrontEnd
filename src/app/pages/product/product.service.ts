import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, throwError } from 'rxjs';
import { ProductModel } from '../ecommerce/model/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API: string = 'http://localhost:4200/api/Products';

  constructor(private readonly _http: HttpClient) {}

  getAllProductAsync(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(this.API).pipe(first());
  }
  store(product: ProductModel): Observable<any> {
    return this._http.post(this.API, product);
  }
  storeImages(product: ProductModel): Observable<any> {
    if (!product.image)
      return throwError(() => {
        return {
          messege: 'Não existem images para enviar ao servidor',
          dateTime: new Date(),
        };
      });

    const formData = new FormData();
    for (let index = 0; index < product.image.length; index++) {
      const element = product.image.item(index);
      formData.append('files', element as Blob);
    }
    return this._http.post(`${this.API}/Images`, formData);
  }
}
