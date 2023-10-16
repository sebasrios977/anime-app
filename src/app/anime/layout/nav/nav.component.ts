import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'navbar-anime',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public navbarVisible: boolean = false;
  public activeItem: MenuItem | undefined;

  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: 'home' },
    { label: 'Top', routerLink: 'top-animes' },
    { label: 'Season', routerLink: 'season-animes' },
  ];

  ngOnInit() {
      this.activeItem = this.menuItems[0];
  }


}
