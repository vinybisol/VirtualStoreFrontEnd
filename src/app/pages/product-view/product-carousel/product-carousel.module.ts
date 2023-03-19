import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/shared.module'
import { ProductCarouselComponent } from './product-carousel.component'

@NgModule({
  declarations: [ProductCarouselComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductCarouselComponent],
})
export class ProductCarouselModule {}
