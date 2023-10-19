import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime.service';
import { SingleAnime } from 'src/app/interfaces/singleAnime.interface';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit, OnDestroy {

  private id!: string;
  private routeSubscription: Subscription | undefined;
  private animeSubscription: Subscription | undefined;

  public anime?: SingleAnime;

  constructor(private route: ActivatedRoute,
    private animeService: AnimeService,
    private sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe( params => {
      this.id = params['id'];
      this.showNewAnimePage();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.animeSubscription?.unsubscribe();
  }

  showNewAnimePage() {
    this.animeSubscription = this.animeService.getAnime(this.id).subscribe( anime => {
      this.anime = anime;
    });
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
