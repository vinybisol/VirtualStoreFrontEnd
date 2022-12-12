import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideNavToggleInterface } from '../side-nav-toggle-interface';
import { menuNavbarData } from './menu-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggleInterface> =
    new EventEmitter();
  @Input() collapsed: boolean = false;

  public screenWidth: number = 0;
  navData = menuNavbarData;
  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(): void {
    if (!this.collapsed) {
      this.collapsed = true;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }
}
