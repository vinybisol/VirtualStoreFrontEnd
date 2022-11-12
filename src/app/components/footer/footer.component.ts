import { Component, OnInit } from '@angular/core';
import { EcommerceService } from 'src/app/pages/ecommerce/ecommerce.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public total: number = 0;
  constructor(private readonly _ecommerceService: EcommerceService) {}

  ngOnInit(): void {
    this._ecommerceService.getCartShoppingTotal().subscribe({
      next: (data) => {
        console.log(data);

        return (this.total = data);
      },
    });
  }
  clearCartShopping() {
    this._ecommerceService.sendClearCartShoppingTotal();
  }
}
