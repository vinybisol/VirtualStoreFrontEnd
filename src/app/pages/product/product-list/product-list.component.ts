import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ProductModel } from '../../ecommerce/model/product-model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductModel[] = []
  @Output() outputProduct = new EventEmitter<ProductModel>()
  displayedColumns: string[] = ['name', 'price', 'priceMarket']

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  getRow(row: ProductModel) {
    this.outputProduct.emit(row)
  }
}
