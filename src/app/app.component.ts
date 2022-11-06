import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public screenWidth: number = 0;
  public collapsed: boolean = true;
  title = 'Lojinha na Web';

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
}
