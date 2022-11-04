import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class EcommerceServiceService {
  constructor() {}

  getAllProductAsync(): ProductModel[] {
    return [
      { position: 1, name: 'Roteador', price: 1.0, quant: 1 },
      { position: 2, name: 'Modem', price: 4.0, quant: 5 },
      { position: 3, name: 'Monitor', price: 6.94, quant: 7 },
      { position: 4, name: 'Espingarda', price: 9.01, quant: 8 },
      { position: 5, name: 'Mouse', price: 10.81, quant: 10 },
      { position: 6, name: 'Teclado', price: 12.01, quant: 15 },
      { position: 7, name: 'Martelo', price: 14.0, quant: 2 },
      { position: 8, name: 'Kit Controle Xbox', price: 15.99, quant: 5 },
      { position: 9, name: 'Rack para TV', price: 18.99, quant: 3 },
      { position: 10, name: 'Lampadas', price: 20.17, quant: 4 },
    ];
  }
}
