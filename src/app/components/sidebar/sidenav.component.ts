import { Component, EventEmitter, Input, Output } from '@angular/core'
import { SideNavToggleInterface } from '../side-nav-toggle-interface'
import { menuNavbarData } from './menu-data'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() toggleSideNav: EventEmitter<SideNavToggleInterface> = new EventEmitter()
  @Input() collapsed = false

  public screenWidth = 0
  navData = menuNavbarData

  toggleCollapse(): void {
    if (!this.collapsed) {
      this.collapsed = true
      this.toggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      })
    }
  }
}
