import { Component } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';

@Component({
  templateUrl: './season-anime.component.html',
  styleUrls: ['./season-anime.component.scss']
})
export class SeasonAnimesComponent {

  public lateSeason: Anime[] = [];
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.allAnimesFromService();
  }

  allAnimesFromService() {
    this.animeService.getLateSeason()
      .subscribe(data => {
        this.lateSeason = data;
    });
  }
}
