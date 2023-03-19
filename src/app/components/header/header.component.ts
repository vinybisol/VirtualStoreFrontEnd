import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { SideNavToggleInterface } from '../side-nav-toggle-interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav: EventEmitter<SideNavToggleInterface> = new EventEmitter()
  public screenWidth = 0
  public collapsed = false
  public title = 'Lojinha na Web'
  private facebookPage = 'https://www.facebook.com/akuwer1/'
  private instagramPage = 'https://www.instagram.com/akuwer/'
  private sharePage = 'http://google.com'

  constructor(private readonly _router: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.toggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    })
  }
  gotoShare(): void {
    window.open(this.sharePage, '_blank')
  }
  gotoFacebook(): void {
    window.open(this.facebookPage, '_blank')
  }
  gotoInstagran(): void {
    window.open(this.instagramPage, '_blank')
  }
  gotoHome(): void {
    this._router.navigate(['/'])
  }
}
