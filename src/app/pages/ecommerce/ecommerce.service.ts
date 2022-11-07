import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class EcommerceService {
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
      },
    ];
  }
}
