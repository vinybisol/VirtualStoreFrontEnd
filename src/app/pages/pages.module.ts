import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EcommerceShopComponent } from './ecommerce/ecommerce-shop/ecommerce-shop.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';

@NgModule({
  declarations: [HomeComponent, EcommerceShopComponent, EcommerceCardComponent],
  imports: [CommonModule, PagesRoutingModule, AppMaterialModule, SharedModule],
})
export class PagesModule {}
