import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';
import { EcommerceHeaderComponent } from './ecommerce/ecommerce-header/ecommerce-header.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProductAddEditComponent } from './product/product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product/product.component';

@NgModule({
  declarations: [
    HomeComponent,
    EcommerceCardComponent,
    EcommerceHeaderComponent,
    ProductListComponent,
    ProductComponent,
    ProductAddEditComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
