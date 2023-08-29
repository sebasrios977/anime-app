import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public allAnimes: Anime[] = [];
  public loading: boolean = true;
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.allAnimesFromService();
  }

  allAnimesFromService() {
    this.animeService.getAllAnimes()
      .subscribe(data => {
        this.allAnimes = data;
        this.loading = false;
    });
  }
}
