import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppMaterialModule } from './app-material/app-material.module'
import { AskDialogComponent } from './ask-dialog/ask-dialog.component'
import { ErrorDialogComponent } from './error-dialog/error-dialog.component'
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component'

@NgModule({
  declarations: [MatSpinnerOverlayComponent, ErrorDialogComponent, AskDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    AppMaterialModule,
    MatSpinnerOverlayComponent,
    ErrorDialogComponent,
    AskDialogComponent,
  ],
})
export class SharedModule {}
