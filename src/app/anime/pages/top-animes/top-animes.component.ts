import { Component } from '@angular/core';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';
import { AnimeService } from '../../services/anime.service';

@Component({
  templateUrl: './top-animes.component.html',
  styleUrls: ['./top-animes.component.scss']
})
export class TopAnimesComponent {

  public topAnimes: Anime[] = [];
  public loading: boolean = true;
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.allAnimesFromService();
  }

  allAnimesFromService() {
    this.animeService.getTopAnimes()
      .subscribe(data => {
        this.topAnimes = data;
        this.loading = false;
    });
  }
}
