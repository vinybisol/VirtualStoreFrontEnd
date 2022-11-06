import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-ecommerce-card',
  templateUrl: './ecommerce-card.component.html',
  styleUrls: ['./ecommerce-card.component.scss'],
})
export class EcommerceCardComponent implements OnInit {
  public products: ProductModel[] = [];
  public breakpoint: number = 0;

  constructor(private readonly _ecommerceService: EcommerceService) {}

  ngOnInit(): void {
    this.products = this._ecommerceService.getAllProductAsync();
    this.breakpoint = this.perPage(window.innerWidth);
  }
  onResize(event: UIEvent) {
    const w = event.target as Window;
    const windowSize = w.innerWidth;
    const perPage = Math.round(windowSize / 250);
    this.breakpoint = perPage;
  }
  perPage(windowSize: number): number {
    return Math.round(windowSize / 250);
  }
}
