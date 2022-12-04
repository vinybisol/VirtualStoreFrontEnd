import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { CartShoppingModel } from '../model/cart-shopping-model';

@Component({
  selector: 'app-ecommerce-header',
  templateUrl: './ecommerce-header.component.html',
  styleUrls: ['./ecommerce-header.component.scss'],
})
export class EcommerceHeaderComponent implements OnInit {
  public cart: CartShoppingModel = new CartShoppingModel();
  constructor(private readonly _ecommerceService: EcommerceService) {}

  ngOnInit(): void {
    this._ecommerceService.getCartShopping().subscribe({
      next: (data) => {
        return (this.cart = data);
      },
    });
  }
  clearCartShopping() {
    this._ecommerceService.sendClearCartShoppingTotal();
  }
}
