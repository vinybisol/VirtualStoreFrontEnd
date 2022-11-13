import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EcommerceService } from '../ecommerce.service';
import { CartShoppingModel } from '../model/cart-shopping-model';
import { ProductModel } from '../model/product-model';

@Component({
  selector: 'app-ecommerce-card',
  templateUrl: './ecommerce-card.component.html',
  styleUrls: ['./ecommerce-card.component.scss'],
})
export class EcommerceCardComponent implements OnInit {
  public total$: Subject<number> = new Subject<number>();
  public products: Observable<ProductModel[]>;
  private cartShopping: CartShoppingModel = new CartShoppingModel();
  public breakpoint: number = 0;

  constructor(private readonly _ecommerceService: EcommerceService) {
    this.products = this._ecommerceService.getAllProductAsync();
  }

  ngOnInit(): void {
    this.breakpoint = this.perPage(window.innerWidth);
    this.total$.next(100);
    this._ecommerceService.getClearCartShoppingTotal().subscribe({
      next: () => {
        this.clearCartShopping();
      },
    });
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

  addInCartShopping(product: ProductModel): void {
    product.inCart = true;
    this.cartShopping.addProductInCart(product);
    this._ecommerceService.sendCartShopping(this.cartShopping);
  }
  clearCartShopping() {
    this.cartShopping.clearCartShooping();
    this._ecommerceService.sendCartShopping(this.cartShopping);
    this.products.forEach((data) => data.map((m) => (m.inCart = false)));
  }
}
