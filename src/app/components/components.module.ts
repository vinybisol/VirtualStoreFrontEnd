import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../app-routing.module'
import { SharedModule } from '../shared/shared.module'
import { BodyComponent } from './body/body.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { SidenavComponent } from './sidebar/sidenav.component'

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, BodyComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [FooterComponent, HeaderComponent, SidenavComponent, BodyComponent],
})
export class ComponentsModule {}
