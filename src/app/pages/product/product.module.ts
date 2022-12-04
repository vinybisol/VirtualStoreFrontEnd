import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductAddEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProductRoutingModule,
  ],
})
export class ProductModule {}
