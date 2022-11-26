import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
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
    const formData = new FormData();
    product.image1 ? formData.append('files', product.image1) : null;
    product.image2 ? formData.append('files', product.image2 as Blob) : null;
    product.image3 ? formData.append('files', product.image3 as Blob) : null;
    product.image4 ? formData.append('files', product.image4 as Blob) : null;
    product.image5 ? formData.append('files', product.image5 as Blob) : null;
    return this._http.post(`${this.API}/Images`, formData);
  }
}
