import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from '../../product/product.service';
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
  public products: ProductModel[] = [];
  private cartShopping: CartShoppingModel = new CartShoppingModel();
  public breakpoint: number = 0;
  public loading: boolean = false;
  imagePath: any;

  constructor(
    private readonly _ecommerceService: EcommerceService,
    private readonly _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.breakpoint = this.perPage(window.innerWidth);
    this.total$.next(100);
    this._ecommerceService.getClearCartShoppingTotal().subscribe({
      next: () => {
        this.clearCartShopping();
      },
    });
    this.loading = true;
    this._productService.getAllProductAsync().subscribe({
      next: (data: ProductModel[]) => {
        this.onSucess(data);
      },
      error: () => {
        this.loading = false;
      },
      complete: () => (this.loading = false),
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
    this.products.map((m) => (m.inCart = false));
  }

  onSucess(data: ProductModel[]) {
    let image: string;
    if (data && data.length > 0 && data[0].images) {
      console.log(data[0].images[0].image);
      this.imagePath = data[0].images[0].image;
    }
    this.products = data;
  }

  ngOnDestroy(): void {
    this.total$.unsubscribe();
  }
}
