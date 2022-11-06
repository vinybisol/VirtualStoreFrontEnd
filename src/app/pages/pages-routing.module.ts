import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';
import { EcommerceShopComponent } from './ecommerce/ecommerce-shop/ecommerce-shop.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ecommerce', component: EcommerceShopComponent },
  { path: 'ecommerce-card', component: EcommerceCardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
