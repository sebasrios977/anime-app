import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { Anime, Jikan } from 'src/app/interfaces/jikanResponse.interface';
import { DataEpisodes, RecentEpisodes } from 'src/app/interfaces/dataEpisodes.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  public allAnimes: Anime[] = [];
  public topAnimes: Anime[] = [];
  public lateSeason: Anime[] = [];
  public recentEpisodes: RecentEpisodes[] = [];
  private baseUrl: string = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) { }

  getAllAnimes(): Observable<Anime[]> {
    if (this.allAnimes.length > 0) {
      return of(this.allAnimes);
    }

    const url = `${this.baseUrl}/anime`;
    return this.http.get<Jikan>(url)
      .pipe(
        map(({data}) => {
          this.allAnimes = data;
          return this.allAnimes;
        }),
      );
  }

  getTopAnimes() {
    if (this.topAnimes.length > 0) {
      return of(this.topAnimes);
    }

    const url = `${this.baseUrl}/top/anime`;
    return this.http.get<Jikan>(url)
      .pipe(
        map(({data})=> {
          this.topAnimes = data;
          return this.topAnimes;
        }),
      );
  }

  getLateSeason(): Observable<Anime[]> {
    if (this.lateSeason.length > 0) {
      return of(this.lateSeason);
    }

    const url = `${this.baseUrl}/seasons/now`;
    return this.http.get<Jikan>(url)
      .pipe(
        map(({data})=> {
          this.lateSeason = data;
          return this.lateSeason;
        }),
      );
  }

  getRecentEpisodes(): Observable<RecentEpisodes[]> {
    if (this.recentEpisodes.length > 0) {
      return of(this.recentEpisodes);
    }

    const url = `${this.baseUrl}/watch/episodes`;
    return this.http.get<DataEpisodes>(url)
      .pipe(
        map(({data})=> {
          data = data.filter(anime => !anime.region_locked);
          data.forEach(episode => {
            if(episode.entry.title.length > 10) {
              episode.entry.title = episode.entry.title.slice(0, 10) + '...';
            }
          })
          this.recentEpisodes = data;
          return this.recentEpisodes;
        }),
      );
  }

  getSpecificAnime(query: string): Observable<Anime[]> {
    const url = `${this.baseUrl}/anime?q=${query}`;
    return this.http.get<Jikan>(url)
      .pipe(
        map( ({data}) => {
          data.forEach(anime => {
            if(anime.title.length > 25) {
              anime.title = anime.title.slice(0,25) + '...';
            }
          })
          return data;
        }),
      );
  }
}
