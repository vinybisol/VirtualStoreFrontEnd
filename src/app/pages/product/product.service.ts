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
    const url: string = `${this.API}/product/getall`;
    return this._http.get<ProductModel[]>(url)
    .pipe(first());
  }
  getAllProductWithImagesAsync(): Observable<ProductModel[]> {
    return this._http
      .get<ProductModel[]>(`${this.API}/product/getall`)
      .pipe(first());
  }
  getByIdAsync(key: string): Observable<ProductModel> {
    return this._http
      .get<ProductModel>(`${this.API}/product/getbyid/${key}`)
      .pipe(first());
  }
  store(product: ProductModel): Observable<ProductModel> {
    const url: string = `${this.API}/product/add`;
    return this._http.post<ProductModel>(url, product);
  }
  storeImages(product: ProductModel, key: string): Observable<any> {
    if (!product.image)
      return throwError(() => {
        return {
          messege: 'Não existem images para enviar ao servidor',
          dateTime: new Date(),
        };
      });

    const formData = new FormData();
    for (let index = 0; index < product.image.length; index++) {
      const element = product.image[index];
      formData.append('files', element as Blob);
    }
    return this._http.post(
      `${this.API}/Products/Images?productKey=${key}`,
      formData
    );
  }
  updateProductAsync(product: ProductModel, key: string): Observable<any> {
    return this._http.put(`${this.API}/Products/${key}`, product);
  }
  deleteProductAsync(key: string) {
    return this._http.delete(`${this.API}/product/delete/${key}`);
  }
}
