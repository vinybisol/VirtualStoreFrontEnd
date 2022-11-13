import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';
import { EcommerceHeaderComponent } from './ecommerce/ecommerce-header/ecommerce-header.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    EcommerceCardComponent,
    EcommerceHeaderComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, AppMaterialModule, SharedModule],
})
export class PagesModule {}
