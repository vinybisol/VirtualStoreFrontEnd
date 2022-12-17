import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../ecommerce/model/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API: string = `${environment.apiUrl}/api`;

  constructor(private readonly _http: HttpClient) {}

  getAllProductAsync(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(`${this.API}/Products`).pipe(first());
  }
  getAllProductWithImagesAsync(): Observable<ProductModel[]> {
    return this._http
      .get<ProductModel[]>(`${this.API}/ProductsWithImages`)
      .pipe(first());
  }
  getByIdAsync(key: string): Observable<ProductModel> {
    return this._http
      .get<ProductModel>(`${this.API}/Products/${key}`)
      .pipe(first());
  }
  store(product: ProductModel): Observable<any> {
    const url: string = `${this.API}/Products`;
    return this._http.post(url, product);
  }
  storeImages(product: ProductModel, key: string): Observable<any> {
    if (!product.images)
      return throwError(() => {
        return {
          messege: 'Não existem images para enviar ao servidor',
          dateTime: new Date(),
        };
      });

    const formData = new FormData();
    formData.append('Name', product.name);
    formData.append('ShortName', product.shortName);
    formData.append('Price', product.price.toString());
    formData.append('PriceMarket', product.priceMarket.toString());
    formData.append('Note', product.note);
    for (let index = 0; index < product.images.length; index++) {
      const element = product.images[index];
      formData.append('images', element as Blob);
    }
    console.log(formData);

    return this._http.post(
      `${this.API}/ProductsWithImages?productKey=${key}`,
      formData
    );
  }
  deleteProductAsync(key: string) {
    return this._http.delete(`${this.API}/Products/${key}`);
  }
}
