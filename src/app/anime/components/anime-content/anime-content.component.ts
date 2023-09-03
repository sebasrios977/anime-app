import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/interfaces/jikanResponse.interface';

@Component({
  selector: 'app-anime-content',
  templateUrl: './anime-content.component.html',
  styleUrls: ['./anime-content.component.scss']
})
export class AnimeContentComponent {

  @Input() public animes: Anime[] = [];
}
