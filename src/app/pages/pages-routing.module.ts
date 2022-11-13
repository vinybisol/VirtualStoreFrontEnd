import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceCardComponent } from './ecommerce/ecommerce-card/ecommerce-card.component';

const routes: Routes = [
  { path: '', component: EcommerceCardComponent },
  { path: 'ecommerce-card', component: EcommerceCardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
