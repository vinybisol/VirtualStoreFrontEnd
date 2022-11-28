import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatSpennerOverlayComponent } from './mat-spenner-overlay/mat-spenner-overlay.component';

@NgModule({
  declarations: [MatSpennerOverlayComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [AppMaterialModule, MatSpennerOverlayComponent],
})
export class SharedModule {}
