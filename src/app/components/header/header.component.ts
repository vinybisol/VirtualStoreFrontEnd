import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SideNavToggleInterface } from '../side-nav-toggle-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggleInterface> =
    new EventEmitter();
  public screenWidth: number = 0;
  public collapsed: boolean = true;
  title = 'Lojinha na Web';
  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
