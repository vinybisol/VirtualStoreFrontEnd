import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, Observable, of, Subject } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
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
  public products$: Observable<ProductModel[]>;
  private cartShopping: CartShoppingModel = new CartShoppingModel();
  public breakpoint: number = 0;
  public loading: boolean = false;

  constructor(
    private readonly _ecommerceService: EcommerceService,
    private readonly _productService: ProductService,
    private readonly _dialog: MatDialog,
    private readonly _router: Router
  ) {
    this.products$ = this._productService.getAllProductWithImagesAsync().pipe(
      map((data) => {
        console.log(data);
        return data;
      }),
      catchError(() => {
        this.openDialog('Erro ao carregar os produtos');
        return of([]);
      })
    );
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

  addInCartShopping(product: ProductModel): void {
    product.inCart = true;
    this.cartShopping.addProductInCart(product);
    this._ecommerceService.sendCartShopping(this.cartShopping);
  }
  clearCartShopping() {
    this.cartShopping.clearCartShooping();
    this._ecommerceService.sendCartShopping(this.cartShopping);
    //this.products.map((m) => (m.inCart = false));
  }

  ngOnDestroy(): void {
    this.total$.unsubscribe();
  }

  onResize(event: UIEvent) {
    const w = event.target as Window;
    const windowSize = w.innerWidth;
    const perPage = Math.round(windowSize / 400);
    this.breakpoint = perPage;
    console.warn(this.breakpoint);
  }

  goTo(key: string) {
    this._router.navigate(['product-view', key]);
  }

  //#region Metodos Privados
  private perPage(windowSize: number): number {
    return Math.round(windowSize / 400);
  }
  private openDialog(messege: string) {
    this._dialog.open(ErrorDialogComponent, {
      data: messege,
    });
  }
  //#endregion
}
