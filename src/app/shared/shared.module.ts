import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';

@NgModule({
  declarations: [MatSpinnerOverlayComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [AppMaterialModule, MatSpinnerOverlayComponent],
})
export class SharedModule {}
