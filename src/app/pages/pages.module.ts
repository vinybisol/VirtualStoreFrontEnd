import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';
import { EcommerceHeaderComponent } from './ecommerce/ecommerce-header/ecommerce-header.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductViewModule } from './product-view/product-view.module';
import { ProductModule } from './product/product.module';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    HomeComponent,
    EcommerceCardComponent,
    EcommerceHeaderComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ProductModule,
    ProductViewModule,
  ],
  exports: [],
})
export class PagesModule {}
