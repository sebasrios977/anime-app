import { Component } from '@angular/core';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';
import { AnimeService } from '../../services/anime.service';
import { RecentEpisodes } from 'src/app/interfaces/dataEpisodes.interface';

@Component({
  selector: 'sidebar-anime',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  recentEpisodes: RecentEpisodes[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.recentEpisodesFromService();
  }

  recentEpisodesFromService() {
    this.animeService.getRecentEpisodes()
      .subscribe(data => this.recentEpisodes = data);
  }

}
