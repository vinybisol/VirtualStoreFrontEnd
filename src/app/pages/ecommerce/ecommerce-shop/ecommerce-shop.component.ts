import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { EcommerceServiceService } from '../ecommerce-service.service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-ecommerce-shop',
  templateUrl: './ecommerce-shop.component.html',
  styleUrls: ['./ecommerce-shop.component.scss'],
})
export class EcommerceShopComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];
  dataSource: ProductModel[] = [];

  @ViewChild(MatPaginator) paginator: any;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  constructor(private readonly _productService: EcommerceServiceService) {}

  ngOnInit(): void {
    this.dataSource = this._productService.getAllProductAsync();
  }
}
const ELEMENT_DATA = [{ position: 0, name: 'Hydrogen', price: 12.12 }];
