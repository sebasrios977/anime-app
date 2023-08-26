import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  templateUrl: './anime-layout.component.html',
  styleUrls: ['./anime-layout.component.scss']
})
export class AnimeLayoutComponent {

  navbarVisible: boolean = false;
  activeItem: MenuItem | undefined;

  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: 'home' },
    { label: 'Top', routerLink: 'top-animes' },
    { label: 'Trending', routerLink: 'trending-animes' },
    { label: 'Newest Episodes', routerLink: 'recent-episodes' },
    { label: 'Tags', routerLink: 'tags' },
  ];

  ngOnInit() {
      this.activeItem = this.menuItems[0];
  }

}
