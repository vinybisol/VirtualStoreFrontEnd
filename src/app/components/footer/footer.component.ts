import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/pages/ecommerce/ecommerce.service';
import { CartShoppingModel } from 'src/app/pages/ecommerce/model/cart-shopping-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public cart: CartShoppingModel = new CartShoppingModel();
  constructor(private readonly _ecommerceService: EcommerceService) {}

  ngOnInit(): void {
    this._ecommerceService.getCartShopping().subscribe({
      next: (data) => {
        console.log(data);

        return (this.cart = data);
      },
    });
  }
  clearCartShopping() {
    this._ecommerceService.sendClearCartShoppingTotal();
  }
}
