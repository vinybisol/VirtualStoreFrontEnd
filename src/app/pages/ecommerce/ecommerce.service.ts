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
        quant: 1,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 2,
        fullName: 'Roteador Completo',
        name: 'Modem',
        price: 4.0,
        quant: 5,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 3,
        fullName: 'Roteador Completo',
        name: 'Monitor',
        price: 6.94,
        quant: 7,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 4,
        fullName: 'Roteador Completo',
        name: 'Espingarda',
        price: 9.01,
        quant: 8,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 5,
        fullName: 'Roteador Completo',
        name: 'Mouse',
        price: 10.81,
        quant: 10,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 6,
        fullName: 'Roteador Completo',
        name: 'Teclado',
        price: 12.01,
        quant: 15,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 7,
        fullName: 'Roteador Completo',
        name: 'Martelo',
        price: 14.0,
        quant: 2,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 8,
        fullName: 'Roteador Completo',
        name: 'Kit Controle Xbox',
        price: 15.99,
        quant: 5,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 9,
        fullName: 'Roteador Completo',
        name: 'Rack para TV',
        price: 18.99,
        quant: 3,
        description: 'Esse é um exemplo de produto para venda',
      },
      {
        position: 10,
        fullName: 'Roteador Completo',
        name: 'Lampadas',
        price: 20.17,
        quant: 4,
        description: 'Esse é um exemplo de produto para venda',
      },
    ];
  }
}
