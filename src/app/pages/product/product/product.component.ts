import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductModel } from '../../ecommerce/model/product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public products$: Observable<ProductModel[]>;
  displayedColumns: string[] = ['name', 'price'];

  constructor(
    private readonly _productService: ProductService,
    private readonly _router: Router
  ) {
    this.products$ = this._productService.getAllProductAsync();
  }

  ngOnInit(): void {}

  gotoAdd(): void {
    this._router.navigate(['/product-add-edit']);
  }
  editProduct($event: ProductModel) {
    console.log($event);
    this._router.navigate(['/product-add-edit']);
  }
}
