import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ProductViewRoutingModule } from './product-view-routing.module';
import { ProductViewComponent } from './product-view.component';

@NgModule({
  declarations: [ProductViewComponent],
  imports: [CommonModule, AppMaterialModule, ProductViewRoutingModule],
})
export class ProductViewModule {}
