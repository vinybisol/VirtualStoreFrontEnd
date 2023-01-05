import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';

const routes: Routes = [
  { path: '', component: EcommerceCardComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'ecommerce-card', component: EcommerceCardComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((module) => module.ProductModule),
  },
  {
    path: 'product-view',
    loadChildren: () =>
      import('./product-view/product-view.module').then(
        (module) => module.ProductViewModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
