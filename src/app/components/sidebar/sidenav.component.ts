import { Component, Input, OnInit } from '@angular/core';
import { menuNavbarData } from './menu-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() collapsed: boolean = false;

  public screenWidth: number = 0;
  navData = menuNavbarData;
  constructor() {}

  ngOnInit(): void {}
}
