import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'anime-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  public myForm: FormGroup = this.fb.group({
    searchInput: [''],
  });
  public animesFound: Anime[] = [];

  constructor(private fb: FormBuilder, private animeService: AnimeService) {}

  ngOnInit() {
      this.myForm.controls['searchInput'].valueChanges
        .pipe(
          debounceTime(300),
          switchMap(searchTerm => this.animeService.getSpecificAnime(searchTerm)),
        )
        .subscribe(animes => {
          if(this.myForm.controls['searchInput'].value === '') {
            this.animesFound = [];
            return;
          }

          this.animesFound = animes;
        });
  }

}
