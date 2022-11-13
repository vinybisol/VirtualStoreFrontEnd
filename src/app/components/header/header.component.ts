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
  public collapsed: boolean = false;
  public title = 'Lojinha na Web';
  private facebookPage: string = 'https://www.facebook.com/akuwer1/';
  private instagramPage: string = 'https://www.instagram.com/akuwer/';
  private sharePage: string = 'http://google.com';
  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  gotoShare(): void {
    window.open(this.sharePage, '_blank');
  }
  gotoFacebook(): void {
    window.open(this.facebookPage, '_blank');
  }
  gotoInstagran(): void {
    window.open(this.instagramPage, '_blank');
  }
}
