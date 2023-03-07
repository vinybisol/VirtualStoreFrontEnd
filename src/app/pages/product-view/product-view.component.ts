import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { map, of, switchMap } from 'rxjs'
import { ProductModel } from '../ecommerce/model/product-model'
import { ProductService } from '../product/product.service'
import { ProductCarouselInterface } from './product-carousel/types/product-carousel.interface'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  product: ProductModel = new ProductModel()
  loading = false

  slides: ProductCarouselInterface[] = []

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._route.params
      .pipe(
        map((params: any) => params['key']), //pega o params da requsição
        switchMap((key) => {
          if (!key) {
            return of<ProductModel>(this.product)
          }
          return this._productService.getByIdAsync(key)
        }) // passa um valor zerado ou pega os dados no servidor
      )
      .subscribe({
        next: (product) => {
          this.product = product
          product.photosIds?.forEach((image) => {
            this.slides.push({
              url: `https://virtualstorestorage.blob.core.windows.net/photos/${image}.jpg`,
              title: 'photo',
            })
          })
          this.changeLoadingStatus(false)
        },
        error: () => {
          this.changeLoadingStatus(false)
          this.goBack()
        },
      })
  }
  private changeLoadingStatus(state: boolean): void {
    this.loading = state
  }
  private goBack(): void {
    this._router.navigate(['product'])
  }
}
