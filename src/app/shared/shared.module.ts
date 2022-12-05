import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';

@NgModule({
  declarations: [MatSpinnerOverlayComponent, ErrorDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    AppMaterialModule,
    MatSpinnerOverlayComponent,
    ErrorDialogComponent,
  ],
})
export class SharedModule {}
