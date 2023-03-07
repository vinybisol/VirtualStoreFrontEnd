import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module'
import { ProductCarouselModule } from './product-carousel/product-carousel.module'
import { ProductViewRoutingModule } from './product-view-routing.module'
import { ProductViewComponent } from './product-view.component'

@NgModule({
  declarations: [ProductViewComponent],
  imports: [CommonModule, AppMaterialModule, ProductCarouselModule, ProductViewRoutingModule],
})
export class ProductViewModule {}
