import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { debounceTime, delay, switchMap, tap } from 'rxjs';
import { AnimeService } from '../../services/anime.service';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';


@Component({
  selector: 'navbar-anime',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public myForm: FormGroup = this.fb.group({
    searchInput: [''],
  });
  public specificAnime: Anime[] = [];
  public navbarVisible: boolean = false;
  public activeItem: MenuItem | undefined;

  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: 'home' },
    { label: 'Top', routerLink: 'top-animes' },
    { label: 'Season', routerLink: 'season-animes' },
  ];

  constructor(private fb: FormBuilder, private animeService: AnimeService) {}

  ngOnInit() {
      this.activeItem = this.menuItems[0];
      this.myForm.controls['searchInput'].valueChanges
        .pipe(
          debounceTime(300),
          switchMap(searchTerm => this.animeService.getSpecificAnime(searchTerm)),
        )
        .subscribe(resp => {
          if(this.myForm.controls['searchInput'].value === '') {
            this.onDeleteSpecificAnime();
            return;
          }
          this.specificAnime = resp;
        });
  }

  onDeleteSpecificAnime() {
    this.animeService.getSpecificAnime('')
      .pipe(
        delay(100),
        tap(() => {
          this.specificAnime = [];
        })
      )
      .subscribe();
  }


}
