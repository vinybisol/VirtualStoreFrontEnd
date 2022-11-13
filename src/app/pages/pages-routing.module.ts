import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';
import { ProductAddEditComponent } from './product/product-add-edit/product-add-edit.component';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [
  { path: '', component: EcommerceCardComponent },
  { path: 'ecommerce-card', component: EcommerceCardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-add-edit', component: ProductAddEditComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
