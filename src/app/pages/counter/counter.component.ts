import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllProducts } from 'src/app/actions/counter';
import { ProductModel } from '../ecommerce/model/product-model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<ProductModel[]> = this.store.select('count');
  constructor(
    private store: Store<{
      count: ProductModel[];
    }>
  ) {}
  getAllProducts() {
    this.store.dispatch(getAllProducts());
  }
}
