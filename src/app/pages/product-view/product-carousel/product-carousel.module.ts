import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProductCarouselComponent } from './product-carousel.component'

@NgModule({
  declarations: [ProductCarouselComponent],
  imports: [CommonModule],
  exports: [ProductCarouselComponent],
})
export class ProductCarouselModule {}
